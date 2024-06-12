<?php
// src/Controller/ManagerController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

class ManagerController extends AbstractController
{
    #[Route('/manager/dashboard', name: 'app_manager_dashboard')]
    public function dashboard(EntityManagerInterface $entityManager) {
        // Consulta para obtener la cantidad de productos por talla (la primera gráfica)
        $queryProductosPorTalla = $entityManager->createQuery(
            'SELECT t.nombre, SUM(p.cantidad) as cantidad
             FROM App\Entity\Producto p
             JOIN p.talla t
             GROUP BY t.nombre'
        );

        // Ejecutar la consulta y obtener resultados para la primera gráfica
        $resultados = $queryProductosPorTalla->getResult();
        $dataForChart = [];

        foreach ($resultados as $resultado) {
            $dataForChart[] = [
                'category' => $resultado['nombre'],
                'quantity' => (int) $resultado['cantidad']
            ];
        }

        // Consulta para obtener la cantidad de productos por pedido
        $queryProductosPorPedido = $entityManager->createQuery(
            'SELECT p.cantidad_productos as cantidadProductos, COUNT(p.cantidad_productos) AS veces_comprado
             FROM App\Entity\Pedido p
             WHERE p.cantidad_productos BETWEEN 1 AND 10
             GROUP BY p.cantidad_productos'
        );

        // Ejecutar la consulta y obtener resultados para la segunda gráfica
        $productosPorPedido = $queryProductosPorPedido->getResult();
        $dataForSecondChart = [];

        foreach ($productosPorPedido as $pedido) {
            $dataForSecondChart[] = [
                'category' => $pedido['cantidadProductos'],
                'quantity' => (int) $pedido['veces_comprado']
            ];
        }

        // Consulta para obtener la cantidad de dinero generada por día
        $queryDineroPorDia = $entityManager->createQuery(
            'SELECT p.fecha, SUM(p.total) AS total_generado
             FROM App\Entity\Pedido p
             GROUP BY p.fecha
             ORDER BY p.fecha'
        );

        // Ejecutar la consulta y obtener resultados para la tercera gráfica
        $DineroPorDia = $queryDineroPorDia->getResult();
        $dataForThirdChart = [];

        foreach ($DineroPorDia as $dinero) {
            $dataForThirdChart[] = [
                'category' => $dinero['fecha']->format('Y-m-d'),
                'quantity' => (int) $dinero['total_generado']
            ];
        }

        // Pasar los datos al template
        return $this->render('manager/dashboard.html.twig', [
            'dataForChart' => json_encode($dataForChart),
            'dataForSecondChart' => json_encode($dataForSecondChart),
            'dataForThirdChart' => json_encode($dataForThirdChart)
        ]);
    }
}
