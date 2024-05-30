<?php
// src/EventSubscriber/TwigGlobalSubscriber.php
namespace App\EventSubscriber;

use Twig\Environment;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class TwigGlobalSubscriber implements EventSubscriberInterface
{
    private $security;
    private $twig;

    public function __construct(Security $security, Environment $twig)
    {
        $this->security = $security;
        $this->twig = $twig;
    }

    public static function getSubscribedEvents()
    {
        return [
            RequestEvent::class => 'onKernelRequest',
        ];
    }

    public function onKernelRequest(RequestEvent $event)
    {
        $user = $this->security->getUser();
        $this->twig->addGlobal('isAuthenticated', $user !== null);
    }
}
