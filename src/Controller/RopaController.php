<?php
// src/Controller/RopaController.php

namespace App\Controller;

use App\Repository\ProductoRepository;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\TallaRepository; // Asegúrate de importar TallaRepository

class RopaController extends AbstractController
{
    #[Route('/ropa', name: 'ropa_page')]
    public function ropa(
        ProductoRepository $productoRepository,
        TallaRepository $tallaRepository,
        Security $security // Asegúrate de agregar Security al método
    ): Response {
        $productos = $productoRepository->findProductosUnicos();
        $tallas = $tallaRepository->findAll();
        
        // Obtenemos el estado de autenticación del usuario
        $isLoggedIn = $security->isGranted('IS_AUTHENTICATED_FULLY');

        return $this->render('ropa/index.html.twig', [
            'productos' => $productos,
            'tallas' => $tallas,
            'isLoggedIn' => $isLoggedIn, // Pasamos el estado de autenticación a la plantilla Twig
        ]);
    }
}