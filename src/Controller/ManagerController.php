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
        // Construir la consulta DQL
        $query = $entityManager->createQuery(
            'SELECT t.nombre, COUNT(p.cantidad) as cantidad
             FROM App\Entity\Producto p
             JOIN p.talla t
             GROUP BY t.id'
        );

        // Ejecutar la consulta y obtener resultados
        $resultados = $query->getResult();

        // Preparar los datos para el gráfico de amCharts
        $dataForChart = [];

        foreach ($resultados as $resultado) {
            $dataForChart[] = [
                'category' => $resultado['nombre'],
                'quantity' => $resultado['cantidad']
            ];
        }

        // Pasar los datos al template
        return $this->render('manager/dashboard.html.twig', [
            'dataForChart' => json_encode($dataForChart)
        ]);
    }
}
