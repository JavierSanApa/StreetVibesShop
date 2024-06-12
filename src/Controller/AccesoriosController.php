<?php
// src/Controller/AccesoriosController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AccesoriosController extends AbstractController
{
    #[Route('/accesorios', name: 'accesorios_page')]
    public function index(): Response
    {
        return $this->render('accesorios/accesorios.html.twig');
    }
}
