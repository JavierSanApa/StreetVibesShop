<?php
// src/Controller/NovedadesController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class NovedadesController extends AbstractController
{
    #[Route('/novedades', name: 'novedades_page')]
    public function index(): Response
    {
        return $this->render('novedades/index.html.twig');
    }
}
