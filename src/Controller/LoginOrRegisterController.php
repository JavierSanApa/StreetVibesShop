<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LoginOrRegisterController extends AbstractController
{
    #[Route('/login_or_register', name: 'login_or_register')]
    public function login_or_register(): Response
    {
        return $this->render('login_or_register/login_or_register.html.twig');
    }
}
