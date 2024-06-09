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
    public function index(Security $security): Response {
        // Verifica si el usuario está autenticado
        $isAuthenticated = $security->isGranted('IS_AUTHENTICATED_FULLY');

        // Pasa el estado de autenticación a la plantilla Twig
        return $this->render('homepage/index.html.twig', [
            'isAuthenticated' => $isAuthenticated,
        ]);
    }
}
