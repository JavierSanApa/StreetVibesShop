<?php
// src/Controller/NovedadesController.php

namespace App\Controller;

use App\Repository\ProductoRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\TallaRepository;

class NovedadesController extends AbstractController
{
    #[Route('/novedades', name: 'novedades_page')]
    public function novedades(ProductoRepository $productoRepository, TallaRepository $tallaRepository,): Response
    {
        // Obtener los últimos productos por cada categoría
        $calzadoNovedades = $productoRepository->findUltimosProductosPorCategoria('Calzado');
        $ropaNovedades = $productoRepository->findUltimosProductosPorCategoria('Ropa');
        $accesoriosNovedades = $productoRepository->findUltimosProductosPorCategoria('Accesorios');
        
        $tallas = $tallaRepository->findAll(); // Obtén todas las tallas (si es necesario)

        return $this->render('novedades/index.html.twig', [
            'calzadoNovedades' => $calzadoNovedades,
            'ropaNovedades' => $ropaNovedades,
            'accesoriosNovedades' => $accesoriosNovedades,
            'tallas' => $tallas,
        ]);
    }
}