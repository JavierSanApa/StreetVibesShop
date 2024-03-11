<?php
// src/Controller/HomepageController.php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;

class HomepageController extends AbstractController
{   
    #[Route('/homepage', name: 'app_homepage')]
    public function index(Security $security) {
    
        // Si el usuario no está autenticado, simplemente muestra la página de inicio
        return $this->render('homepage/index.html.twig', [
            'isAuthenticated' => false, // Indica que el usuario no está autenticado
        ]);
    }

}
