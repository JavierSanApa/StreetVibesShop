<?php
// src/Controller/CarritoController.php
namespace App\Controller;

use App\Repository\TallaRepository;
use App\Repository\ProductoRepository;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CarritoController extends AbstractController
{
    #[Route('/carrito', name: 'app_carrito')]
    public function index(Request $request): Response
    {
        // Obtiene el carrito de la sesión
        $carrito = $request->getSession()->get('carrito', []);

        // Pasa el carrito al template
        return $this->render('carrito/index.html.twig', [
            'carrito' => $carrito,
        ]);
    }

    #[Route('/añadirAcarrito/{idProducto}', name: 'app_añadir_a_carrito')]
    public function añadirACarrito(Request $request, ProductoRepository $productoRepository, $idProducto, TallaRepository $tallaRepository, Security $security): Response
    {
        if (!$security->isGranted('IS_AUTHENTICATED_FULLY')) {
            $this->addFlash('error', 'Debes iniciar sesión para agregar productos al carrito.');
            return $this->redirectToRoute('app_login');
        }

        $producto = $productoRepository->find($idProducto);
        $tallaId = $request->request->get('talla');
        $cantidad = intval($request->request->get('cantidad', 1));

        $claveProductoCarrito = $idProducto . '-' . $tallaId;

        $carrito = $request->getSession()->get('carrito', []);

        if (isset($carrito[$claveProductoCarrito])) {
            $carrito[$claveProductoCarrito]['cantidad'] += $cantidad;
            $carrito[$claveProductoCarrito]['subtotal'] = $carrito[$claveProductoCarrito]['cantidad'] * $carrito[$claveProductoCarrito]['precio'];
        } else {
            $carrito[$claveProductoCarrito] = [
                'idProducto' => $idProducto,
                'nombre' => $producto->getNombre(),
                'cantidad' => $cantidad,
                'tallaId' => $tallaId,
                'tallaNombre' => $tallaRepository->find($tallaId)->getNombre(),
                'precio' => $producto->getPrecio(),
                'subtotal' => $cantidad * $producto->getPrecio(),
            ];
        }

        $request->getSession()->set('carrito', $carrito);

        if ($request->isXmlHttpRequest()) {
            return new JsonResponse(['message' => 'Producto añadido correctamente al carrito']);
        }
    
        // Solo redirecciona si no es una llamada AJAX
        return $this->redirectToRoute('ropa_page');
    }

    #[Route('/eliminarDelCarrito/{claveProductoCarrito}', name: 'app_eliminar_del_carrito', methods: ['POST'])]
    public function eliminarDelCarrito(Request $request, $claveProductoCarrito): Response
    {
        $carrito = $request->getSession()->get('carrito', []);
        if (isset($carrito[$claveProductoCarrito])) {
            unset($carrito[$claveProductoCarrito]);
            $request->getSession()->set('carrito', $carrito);
        }

        return $this->redirectToRoute('app_carrito');
    }
}
