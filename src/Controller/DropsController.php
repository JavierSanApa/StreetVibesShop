<?php
// src/Controller/DropsController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DropsController extends AbstractController
{
    #[Route('/drops', name: 'drops_page')]
    public function index(): Response
    {
        return $this->render('drops/drops.html.twig');
    }
}
