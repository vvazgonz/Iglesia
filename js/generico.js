// generico.js — versión corregida

function Navegacion() {
  const nav = `<ul class="Navegacion__ul">
    <li class="Navegacion__item"><a href="index.html">DESTACADO</a></li>
    <li class="Navegacion__item"><a href="audiovisuales.html">AUDIOVISUALES</a></li>
    <li class="Navegacion__item"><a href="contacto.html">CONTACTO</a></li>
  </ul>`;
  document.getElementById("nav").innerHTML = nav;
}

function toggleMenu() {
  const ul = document.querySelector('.Navegacion__ul');
  const hamburguesa = document.querySelector('.hamburguesa');
  const isOpen = ul.classList.toggle('is-open');

  hamburguesa.setAttribute('aria-expanded', isOpen);
}

// Llamar a Navegacion() en cuanto el script se ejecuta
// (ya estamos al final del body, el DOM existe)
Navegacion();