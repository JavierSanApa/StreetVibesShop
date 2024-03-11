<?php
// src/Repository/ProductoRepository.php

namespace App\Repository;

use App\Entity\Producto;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class ProductoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Producto::class);
    }

    /**
     * Encuentra el nombre de un producto por su ID.
     *
     * @param int $id El ID del producto.
     * @return string|null El nombre del producto, o null si no se encuentra.
     */
    public function findNombreById(int $id): ?string
    {
        $producto = $this->find($id);
        return $producto ? $producto->getNombre() : null;
    }

    public function findProductosUnicos()
    {
        // Suponiendo que tienes un campo 'nombreProducto' o algo similar para agrupar
        $qb = $this->createQueryBuilder('p')
            ->select('p')
            ->groupBy('p.nombre'); // Ajusta 'nombreProducto' según tu esquema

        $query = $qb->getQuery();

        return $query->getResult();
    }
}
