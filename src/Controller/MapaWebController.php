<?php
// src/Controller/MapaWebController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MapaWebController extends AbstractController
{
    #[Route('/mapaweb', name: 'mapaweb_page')]
    public function index(): Response
    {
        return $this->render('mapaweb/mapaweb.html.twig');
    }
}
