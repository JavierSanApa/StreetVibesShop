<?php
// src/Controller/RopaController.php

namespace App\Controller;

use App\Repository\ProductoRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
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
        PaginatorInterface $paginator, // Importa el servicio PaginatorInterface
        Request $request // Importa la clase Request
    ): Response {
        $productosQuery = $productoRepository->findProductosUnicos();
        $pagination = $paginator->paginate(
            $productosQuery, // Query sin ejecutar
            $request->query->getInt('page', 1), // Número de página, por defecto 1
            8 // Número de artículos por página
        );
        $tallas = $tallaRepository->findAll();
        
        return $this->render('ropa/index.html.twig', [
            'pagination' => $pagination, // Pasamos el objeto de paginación a la plantilla Twig
            'tallas' => $tallas,
        ]);
    }
}
