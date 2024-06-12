<?php
// src/Controller/AccesoriosController.php

namespace App\Controller;

use App\Repository\ProductoRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\TallaRepository;

class AccesoriosController extends AbstractController
{
    #[Route('/accesorios', name: 'accesorios_page')]
    public function index(
        ProductoRepository $productoRepository,
        TallaRepository $tallaRepository,
        PaginatorInterface $paginator,
        Request $request
    ): Response {
        $productosQuery = $productoRepository->findByCategoria('Accesorios'); // Consulta los productos por categoría
        $pagination = $paginator->paginate(
            $productosQuery, // Query sin ejecutar
            $request->query->getInt('page', 1), // Número de página, por defecto 1
            8 // Número de artículos por página
        );
        $tallas = $tallaRepository->findAll(); // Obtén todas las tallas (si es necesario)

        return $this->render('accesorios/accesorios.html.twig', [
            'pagination' => $pagination, // Pasamos el objeto de paginación a la plantilla Twig
            'tallas' => $tallas, // Pasamos las tallas a la plantilla Twig (si es necesario)
        ]);
    }
}

