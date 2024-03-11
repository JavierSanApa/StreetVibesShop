<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240308174505 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE producto ADD precio NUMERIC(10, 2) NOT NULL');
        $this->addSql('ALTER TABLE producto RENAME INDEX idx_a7bb06154f35acae TO IDX_A7BB06155997DE7B');
        $this->addSql('ALTER TABLE valoracion DROP FOREIGN KEY fk_valoracion_usuario');
        $this->addSql('ALTER TABLE valoracion DROP FOREIGN KEY fk_valoracion_cliente');
        $this->addSql('ALTER TABLE valoracion DROP FOREIGN KEY fk_valoracion_producto');
        $this->addSql('DROP INDEX fk_valoracion_producto ON valoracion');
        $this->addSql('DROP INDEX fk_valoracion_cliente ON valoracion');
        $this->addSql('DROP INDEX fk_valoracion_usuario ON valoracion');
        $this->addSql('ALTER TABLE valoracion DROP producto, DROP cliente, DROP usuario');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE producto DROP precio');
        $this->addSql('ALTER TABLE producto RENAME INDEX idx_a7bb06155997de7b TO IDX_A7BB06154F35ACAE');
        $this->addSql('ALTER TABLE valoracion ADD producto INT DEFAULT NULL, ADD cliente INT DEFAULT NULL, ADD usuario INT DEFAULT NULL');
        $this->addSql('ALTER TABLE valoracion ADD CONSTRAINT fk_valoracion_usuario FOREIGN KEY (usuario) REFERENCES usuario (id) ON UPDATE CASCADE ON DELETE CASCADE');
        $this->addSql('ALTER TABLE valoracion ADD CONSTRAINT fk_valoracion_cliente FOREIGN KEY (cliente) REFERENCES cliente (id) ON UPDATE CASCADE ON DELETE CASCADE');
        $this->addSql('ALTER TABLE valoracion ADD CONSTRAINT fk_valoracion_producto FOREIGN KEY (producto) REFERENCES producto (id) ON UPDATE CASCADE ON DELETE CASCADE');
        $this->addSql('CREATE INDEX fk_valoracion_producto ON valoracion (producto)');
        $this->addSql('CREATE INDEX fk_valoracion_cliente ON valoracion (cliente)');
        $this->addSql('CREATE INDEX fk_valoracion_usuario ON valoracion (usuario)');
    }
}
