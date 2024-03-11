<?php
// src/Controller/CompraController.php
namespace App\Controller;

use App\Entity\Pedido;
use App\Entity\Producto;
use App\Entity\LineaPedido;
use App\Repository\TallaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CompraController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }
    
    #[Route('/compra', name: 'app_compra')]
    public function index(): Response
    {
        return $this->render('compra/index.html.twig', [
            'controller_name' => 'CompraController',
        ]);
    }

    #[Route('/realizarCompra', name: 'app_realizar_compra')]
    public function realizarCompra(Request $request): Response
    {
        $carrito = $request->getSession()->get('carrito', []);
        $usuario = $this->getUser();

        $pedido = new Pedido();
        $pedido->setUsuario($usuario);
        $pedido->setFecha(new \DateTime());
        $pedido->setEstado('Pendiente');

        foreach ($carrito as $claveProductoCarrito => $item) {
            $producto = $this->entityManager->getRepository(Producto::class)->find($item['idProducto']);
            
            if (!$producto) {
                throw new \Exception("El producto no existe.");
            }

            // Verificar que hay suficiente cantidad disponible
            if ($producto->getCantidad() < $item['cantidad']) {
                throw new \Exception("No hay suficiente cantidad disponible para el producto {$producto->getNombre()}.");
            }

            // Restar la cantidad vendida de la cantidad disponible
            $nuevaCantidad = $producto->getCantidad() - $item['cantidad'];
            $producto->setCantidad($nuevaCantidad);

            $lineaPedido = new LineaPedido();
            $lineaPedido->setPedido($pedido);
            $lineaPedido->setProducto($producto);
            $lineaPedido->setCantidad($item['cantidad']);
            // Asumiendo que LineaPedido tiene un método setPrecio
            $lineaPedido->setPrecio($producto->getPrecio());

            $this->entityManager->persist($lineaPedido);
            // Actualiza el producto con la nueva cantidad
            $this->entityManager->persist($producto);
        }

        $this->entityManager->persist($pedido);
        $this->entityManager->flush();

        // Limpiar el carrito después de la compra
        $request->getSession()->set('carrito', []);

        // Redirigir a una ruta nombrada para manejar la redirección
        return $this->redirectToRoute('app_landing_page');
    }

}
