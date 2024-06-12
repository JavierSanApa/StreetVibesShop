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

    /**
     * Encuentra los últimos productos por categoría.
     *
     * @param string $categoria La categoría de los productos.
     * @param int $limit El número máximo de productos a obtener (por defecto 2).
     * @return array|null Los últimos productos por categoría, o null si no se encuentran.
     */
    public function findUltimosProductosPorCategoria(string $categoria, int $limit = 2): ?array
    {
        $qb = $this->createQueryBuilder('p')
            ->andWhere('p.categoria = :categoria')
            ->setParameter('categoria', $categoria)
            ->orderBy('p.id', 'DESC') // Ordena por ID descendente (asumiendo que ID es correlativo a la fecha de creación)
            ->setMaxResults($limit);

        $query = $qb->getQuery();

        return $query->getResult();
    }
}
