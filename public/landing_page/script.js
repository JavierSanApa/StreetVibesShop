// Activar dropdown al pasar el ratón sobre el enlace "Novedades"
document.getElementById('novedadesDropdown').addEventListener('mouseover', function() {
    this.querySelector('.dropdown-menu').classList.add('show');
});

// Desactivar dropdown al retirar el ratón del enlace "Novedades"
document.getElementById('novedadesDropdown').addEventListener('mouseout', function() {
    this.querySelector('.dropdown-menu').classList.remove('show');
});


// Activar dropdown al pasar el ratón sobre el enlace "Calzado"
document.getElementById('calzadoDropdown').addEventListener('mouseover', function() {
    this.querySelector('.dropdown-menu').classList.add('show');
});

// Desactivar dropdown al retirar el ratón del enlace "Calzado"
document.getElementById('calzadoDropdown').addEventListener('mouseout', function() {
    this.querySelector('.dropdown-menu').classList.remove('show');
});


// Activar dropdown al pasar el ratón sobre el enlace "Ropa"
document.getElementById('ropaDropdown').addEventListener('mouseover', function() {
    this.querySelector('.dropdown-menu').classList.add('show');
});

// Desactivar dropdown al retirar el ratón del enlace "Ropa"
document.getElementById('ropaDropdown').addEventListener('mouseout', function() {
    this.querySelector('.dropdown-menu').classList.remove('show');
});

// Activar dropdown al pasar el ratón sobre el enlace "Accesorios"
document.getElementById('accesoriosDropdown').addEventListener('mouseover', function() {
    this.querySelector('.dropdown-menu').classList.add('show');
});

// Desactivar dropdown al retirar el ratón del enlace "Accesorios"
document.getElementById('accesoriosDropdown').addEventListener('mouseout', function() {
    this.querySelector('.dropdown-menu').classList.remove('show');
});

document.addEventListener("DOMContentLoaded", function() {
    var menuHeight = document.getElementById('menu').offsetHeight;
    document.body.style.paddingTop = menuHeight + 'px';
  });
  