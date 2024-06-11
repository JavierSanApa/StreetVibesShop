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
            'SELECT t.nombre, SUM(p.cantidad) as cantidad
             FROM App\Entity\Producto p
             JOIN p.talla t
             GROUP BY t.nombre'
        );

        // Ejecutar la consulta y obtener resultados
        $resultados = $query->getResult();

        // Preparar los datos para el gráfico de amCharts
        $dataForChart = [];

        foreach ($resultados as $resultado) {
            $dataForChart[] = [
                'category' => $resultado['nombre'],
                'quantity' => (int) $resultado['cantidad'] // Asegúrate de que sea un número
            ];
        }

        // Pasar los datos al template
        return $this->render('manager/dashboard.html.twig', [
            'dataForChart' => json_encode($dataForChart)
        ]);


        // Pasar los datos al template
        return $this->render('manager/dashboard.html.twig', [
            'dataForChart' => json_encode($dataForChart)
        ]);
    }
}
