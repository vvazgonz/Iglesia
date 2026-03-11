// js/destacados.js
// Para añadir una publicación nueva, añade un objeto al array siguiendo el mismo formato.
// El más reciente va primero.

const publicaciones = [
  {
    titulo: "Actualización del estilo de la página",
    fecha: "2026-03-10",
    texto: "Tras unos años, se ha implementado finalmente una mejora sustancial del código y estética de la página web",
    imagen: "img/actualizacion.jpg"
  },
  {
    titulo: "Nueva página web",
    fecha: "2025-07-15",
    texto: "Se ha hecho pública la primera versión de la página web. Reporte cualquier error que halle.",
    imagen: "img/destacados1.jpg"
  },
];

function formatearFecha(fechaISO) {
  const [anio, mes, dia] = fechaISO.split('-');
  const meses = ["enero","febrero","marzo","abril","mayo","junio",
                 "julio","agosto","septiembre","octubre","noviembre","diciembre"];
  return `${parseInt(dia)} de ${meses[parseInt(mes) - 1]} de ${anio}`;
}

function renderDestacados() {
  const linea = document.querySelector('.Destacados__linea');
  if (!linea) return;

  linea.innerHTML = publicaciones.map(p => `
    <article class="Destacados__linea-entrada">
      <div class="Destacados__linea-entrada-imagen">
        <img src="${p.imagen}" alt="${p.titulo}" loading="lazy">
      </div>
      <div class="Destacados__linea-entrada-descripcion">
        <h3 class="Destacados__linea-entrada-descripcion-titulo">${p.titulo}</h3>
        <time class="Destacados__linea-entrada-descripcion-fecha" datetime="${p.fecha}">
          ${formatearFecha(p.fecha)}
        </time>
        <p class="Destacados__linea-entrada-descripcion-texto">${p.texto}</p>
      </div>
    </article>
  `).join('');
}

renderDestacados();