<?php
// src/Controller/LandingPageController.php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;

class LandingPageController extends AbstractController
{   
    #[Route('/landing_page', name: 'app_landing_page')]
    public function index(Security $security) {
        // Verifica si el usuario está autenticado
        if ($this->getUser()) {
            // Si el usuario está autenticado, redirige según su rol
            if ($this->isGranted('ROLE_ADMIN')) {
                return $this->redirectToRoute('app_admin');

            }elseif($this->isGranted('ROLE_MANAGER')){
                return $this->redirectToRoute('app_manager_dashboard');
            
            }else{
                // Redirige a una página diferente para los usuarios normales si es necesario
                return $this->redirectToRoute('app_homepage');
            }
        }
    
        // Si el usuario no está autenticado, simplemente muestra la página de inicio
        return $this->render('landing_page/index.html.twig', [
            'isAuthenticated' => false, // Indica que el usuario no está autenticado
        ]);
    }
    
    #[Route('/logout', name: 'app_logout')]
    public function logout(Security $security)
    {
    }

}
