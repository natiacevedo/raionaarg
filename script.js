// === CERRAR NAVBAR AL HACER CLICK ===
document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar-collapse');
    const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
    bsCollapse.hide();
  });
});

// === GENERAR CATALOGO ===
function generarCatalogo() {
  const contenedor = document.getElementById("catalogoCards");
  contenedor.innerHTML = "";

  for (const id in productos) {
    const p = productos[id];

    const tipos = p.tipo ? p.tipo.join(" ") : "";

    contenedor.innerHTML += `
      <div class="col-12 col-md-3 catalogo-item animar" data-tipo="${tipos}">
        <a href="producto.html?id=${id}" class="text-decoration-none">
          <div class="card shadow h-100">
            <img src="${p.imagen}" alt="${p.titulo}">
            <div class="card-body">
              <h6 class="card-title">${p.titulo}</h6>
            </div>
          </div>
        </a>
      </div>
    `;
  }
}

generarCatalogo();

/* Animaciones */
document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".animar");
    const hash = window.location.hash;

    if (hash === "#catalogo") {
        elementos.forEach(el => el.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elementos.forEach(el => observer.observe(el));
});

// === BOTÓN "VER CATALOGO" ===
document.querySelector('.ver-catalogo').addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector('#catalogo');
    const headerOffset = 80; // alto de tu header
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

    // Cambiar hash y activar animación inmediatamente
    history.pushState(null, null, '#catalogo');
    target.classList.add("visible");
});
