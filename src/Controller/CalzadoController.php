<?php
// src/Controller/CalzadoController.php

namespace App\Controller;

use App\Repository\ProductoRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\TallaRepository;

class CalzadoController extends AbstractController
{
    #[Route('/calzado', name: 'calzado_page')]
    public function calzado(
        ProductoRepository $productoRepository,
        TallaRepository $tallaRepository,
        PaginatorInterface $paginator,
        Request $request
    ): Response {
        // Filtrar los productos por categoría "Calzado"
        $queryBuilder = $productoRepository->createQueryBuilder('p')
            ->where('p.categoria = :categoria')
            ->setParameter('categoria', 'Calzado');

        $pagination = $paginator->paginate(
            $queryBuilder, // Query sin ejecutar
            $request->query->getInt('page', 1), // Número de página, por defecto 1
            8 // Número de artículos por página
        );

        $tallas = $tallaRepository->findAll();
        
        return $this->render('calzado/calzado.html.twig', [
            'pagination' => $pagination,
            'tallas' => $tallas,
        ]);
    }
}
