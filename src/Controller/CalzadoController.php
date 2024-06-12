<?php
// src/Controller/CalzadoController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CalzadoController extends AbstractController
{
    #[Route('/calzado', name: 'calzado_page')]
    public function index(): Response
    {
        return $this->render('calzado/calzado.html.twig');
    }
}
