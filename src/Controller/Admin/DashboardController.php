<?php

namespace App\Controller\Admin;

use App\Entity\Talla;
use App\Entity\Pedido;
use App\Entity\Cliente;
use App\Entity\Usuario;
use App\Entity\Producto;
use App\Entity\Valoracion;
use App\Entity\LineaPedido;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'app_admin')]
    public function index(): Response
    {
        //return parent::index();
        return $this->render('admin/admin.html.twig');

        // Option 1. You can make your dashboard redirect to some common page of your backend
        //
        // $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);
        // return $this->redirect($adminUrlGenerator->setController(OneOfYourCrudController::class)->generateUrl());

        // Option 2. You can make your dashboard redirect to different pages depending on the user
        //
        // if ('jane' === $this->getUser()->getUsername()) {
        //     return $this->redirect('...');
        // }

        // Option 3. You can render some custom template to display a proper dashboard with widgets, etc.
        // (tip: it's easier if your template extends from @EasyAdmin/page/content.html.twig)
        //
        // return $this->render('some/path/my-dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('My Project Directory');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Producto', 'fas fa-list', Producto::class);
        yield MenuItem::linkToCrud('Talla', 'fas fa-list', Talla::class);
        yield MenuItem::linkToCrud('Cliente', 'fas fa-list', Cliente::class);
        yield MenuItem::linkToCrud('LineaPedido', 'fas fa-list', LineaPedido::class);
        yield MenuItem::linkToCrud('Pedido', 'fas fa-list', Pedido::class);
        yield MenuItem::linkToCrud('Usuario', 'fas fa-list', Usuario::class);
        yield MenuItem::linkToCrud('Valoracion', 'fas fa-list', Valoracion::class);
    }
}
