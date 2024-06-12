<?php

namespace App\Controller;

use App\Entity\Pedido;
use App\Entity\Producto;
use App\Entity\LineaPedido;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
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

        $total = 0.0;
        $cantidadProductos = 0; // Inicializar la cantidad de productos

        $lineasPedido = []; // Inicializar el arreglo de líneas de pedido

        foreach ($carrito as $claveProductoCarrito => $item) {
            $producto = $this->entityManager->getRepository(Producto::class)->find($item['idProducto']);

            if (!$producto) {
                throw new \Exception("El producto no existe.");
            }

            if ($producto->getCantidad() < $item['cantidad']) {
                throw new \Exception("No hay suficiente cantidad disponible para el producto {$producto->getNombre()}.");
            }

            $nuevaCantidad = $producto->getCantidad() - $item['cantidad'];
            $producto->setCantidad($nuevaCantidad);

            $lineaPedido = new LineaPedido();
            $lineaPedido->setPedido($pedido);
            $lineaPedido->setProducto($producto);
            $lineaPedido->setCantidad($item['cantidad']);
            $lineaPedido->setPrecio($producto->getPrecio());

            $this->entityManager->persist($lineaPedido);
            $this->entityManager->persist($producto);

            $total += $producto->getPrecio() * $item['cantidad'];
            $cantidadProductos += $item['cantidad']; // Incrementar la cantidad de productos

            $lineasPedido[] = [
                'nombre' => $producto->getNombre(),
                'cantidad' => $item['cantidad'],
                'talla' => $item['tallaNombre'],
                'precio' => $producto->getPrecio(),
            ];
        }

        $pedido->setTotal($total);
        $pedido->setcantidad_productos($cantidadProductos); // Establecer la cantidad de productos en el pedido
        $this->entityManager->persist($pedido);
        $this->entityManager->flush();

        $request->getSession()->set('carrito', []);

        return $this->render('compra/confirmacion.html.twig', [
            'lineas' => $lineasPedido,
            'total' => $total,
            'cantidadProductos' => $cantidadProductos, // Pasar la cantidad de productos a la vista
        ]);
    }
}
