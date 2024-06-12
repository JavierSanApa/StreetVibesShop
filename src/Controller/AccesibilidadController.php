<?php
// src/Controller/AccesibilidadController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AccesibilidadController extends AbstractController
{
    #[Route('/accesibilidad', name: 'accessibilidad_page')]
    public function index(): Response
    {
        return $this->render('accesibilidad/accesibilidad.html.twig');
    }
}
