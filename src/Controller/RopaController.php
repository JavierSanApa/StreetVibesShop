<?php
// src/Controller/RopaController.php

namespace App\Controller;

use App\Repository\ProductoRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\TallaRepository;

class RopaController extends AbstractController
{
    #[Route('/ropa', name: 'ropa_page')]
    public function ropa(
        ProductoRepository $productoRepository,
        TallaRepository $tallaRepository,
        PaginatorInterface $paginator,
        Request $request
    ): Response {
        // Filtrar los productos por categoría "Ropa"
        $queryBuilder = $productoRepository->createQueryBuilder('p')
            ->where('p.categoria = :categoria')
            ->setParameter('categoria', 'Ropa');

        $pagination = $paginator->paginate(
            $queryBuilder, // Query sin ejecutar
            $request->query->getInt('page', 1), // Número de página, por defecto 1
            8 // Número de artículos por página
        );

        $tallas = $tallaRepository->findAll();
        
        return $this->render('ropa/index.html.twig', [
            'pagination' => $pagination,
            'tallas' => $tallas,
        ]);
    }
}