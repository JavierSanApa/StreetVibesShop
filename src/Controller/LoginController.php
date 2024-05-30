<?php
// src/Controller/LoginController.php

namespace App\Controller;

use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class LoginController extends AbstractController
{
    #[Route('/login', name: 'app_login')]
    public function index(AuthenticationUtils $authenticationUtils, LoggerInterface $logger): Response
    {
        $logger->info('I just got the logger');
        $logger->error('An error occurred');

        // log messages can also contain placeholders, which are variable names
        // wrapped in braces whose values are passed as the second argument
        $logger->debug('User {userId} has logged in', [
            'userId' => $authenticationUtils
        ]);

        $logger->critical('I left the oven on!', [
            // include extra "context" info in your logs
            'cause' => 'in_hurry',
        ]);

        $error = $authenticationUtils->getLastAuthenticationError();

        $lastUsername = $authenticationUtils->getLastUsername();

        if ($this->getUser()) {
            if ($this->isGranted('ROLE_ADMIN')) {
                return $this->redirectToRoute('app_admin');
            } else {
                return $this->redirectToRoute('app_homepage'); // Redirige a la página de inicio si es un usuario normal
            }
        }

        return $this->render('login/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }
}
