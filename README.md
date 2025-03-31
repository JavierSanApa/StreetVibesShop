# StreetVibesShop

StreetVibesShop es una tienda online desarrollada con Symfony y tecnologías web modernas. Este proyecto fue realizado como parte del Trabajo de Fin de Grado en Desarrollo de Aplicaciones Web.

## 🚀 Características

- 🛒 **Gestión de productos**: Los usuarios pueden explorar y comprar productos.
- 🔐 **Autenticación y roles**: Registro e inicio de sesión con diferentes permisos.
- 📦 **Carrito de compras**: Funcionalidad para agregar y gestionar productos en el carrito.
- 💳 **Pasarela de pago**: Integración con métodos de pago.
- 📊 **Panel de administración**: Gestión de productos, usuarios y pedidos.

## 🛠️ Tecnologías utilizadas

- **Backend**: Symfony (PHP), MySQL
- **Frontend**: Twig, Bootstrap, JavaScript
- **Control de versiones**: Git y GitHub

## 📥 Instalación

### 1. Clonar el repositorio
```bash
  git clone https://github.com/JavierSanApa/StreetVibesShop.git
  cd StreetVibesShop
```

### 2. Instalar dependencias
```bash
  composer install
```

### 3. Configurar el entorno
1. Copiar el archivo de configuración:
```bash
  cp .env.example .env
```
2. Editar el archivo `.env` con las credenciales de la base de datos.

### 4. Configurar la base de datos
```bash
  php bin/console doctrine:database:create
  php bin/console doctrine:migrations:migrate
```

### 5. Ejecutar el servidor
```bash
  symfony server:start
```
El proyecto estará disponible en: [http://localhost:8000](http://localhost:8000)

## 📌 Estado del proyecto
Actualmente, el proyecto está en fase de desarrollo/mejoras. Se planea agregar nuevas funcionalidades en el futuro.

## 📜 Licencia
Este proyecto es de código abierto bajo la licencia MIT.

## 🤝 Contacto
Si tienes preguntas o sugerencias, puedes contactarme en javisncz2000@gmail.com
