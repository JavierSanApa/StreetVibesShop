<?php
// src/Controller/RopaController.php

namespace App\Controller;

use App\Repository\ProductoRepository;
use App\Repository\TallaRepository; // Asegúrate de importar TallaRepository
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RopaController extends AbstractController
{
    #[Route('/ropa', name: 'ropa_page')]
    public function ropa(ProductoRepository $productoRepository, TallaRepository $tallaRepository): Response
    {
        $productos = $productoRepository->findProductosUnicos();
        $tallas = $tallaRepository->findAll();

        return $this->render('ropa/index.html.twig', [
            'productos' => $productos,
            'tallas' => $tallas,
        ]);
    }
}







