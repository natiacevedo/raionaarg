const productos = {
  soportesverticales: {
    id: "soportesverticales",
    titulo: "Box con Soportes Verticales",
    caracteristicas: [
      "Cerradura con triple punto de anclaje.",
      "Posibilidad de poner candado.",
      "Brazos hidráulicos para facilitar su apertura.",
      "Sostenido por su propia estructura sin necesidad de ser amurada.",
      "Capacidad de más de 400 kg de carga.",
      "Ignífugo.",
      "Resistencia contra la oxidación y corrosión.",
      "Soportes regulables en altura para adaptarlo a cualquier vehículo."
    ],
    material: "Acero galvanizado calibre 20 (cuerpo del box) y 14 (soportes verticales) con un acabado de pintura electroestática color gris claro.",
    dimensiones: [
      "Largo: 2.20m / 2.40m",
      "Alto: 1.00m",
      "Profundidad: 1.10m",
      "Soportes regulables: entre 1.00m y 1.50m"
    ],
    imagen: "img/soportesverticales.jpg",
    imagenes: [
      "img/soportesverticales dimensiones.jpg",
      "img/soportesverticales1.jpg",
      "img/soportesverticales2.jpg",
      "img/soportesverticales3.jpg"
    ]
  },
  
  colganteblack: {
    id: "colganteblack",
    titulo: "Box Colgante Dos Puertas",
    caracteristicas: [ 
      "Cerradura con doble punto de anclaje.",
      "Posibilidad de amurarse a la pared o apoyarse sobre el suelo.",
      "Capacidad de 150 kg. de carga.", "Ignífugo.",
      "Resistencia contra la oxidación y corrosión." ],
    material: "Acero galvanizado calibre 24 con un acabado de pintura electroestática color gris claro.",
    dimensiones: [
      "Largo: 2.00m", 
      "Alto: 1.00m",
      "Profundidad: 0.55m" ],
    imagen: "img/colganteblack.jpg",
    imagenes: [
      "img/colganteblack copia.jpg",
      "img/black1.jpg",
      "img/black2.jpg",
      "img/black3.jpg",
      "img/black4.jpg",
      "img/black5.jpg" ] 
    }, 
    
    colgantegrey: { 
      id: "colgantegrey",
      titulo: "Box Colgante Simple",
      caracteristicas: [ 
        "Cerradura con triple punto de anclaje.",
        "Posibilidad de poner candado.",
        "Brazos hidráulicos para facilitar su apertura.",
        "Capacidad de 200 kg de carga.",
        "Ignífugo.",
        "Resistencia contra la oxidación y corrosión." ],
      material: "Acero galvanizado calibre 20 con un acabado de pintura electroestática color gris claro.", 
      dimensiones: [ 
        "Largo: 1.75m", 
        "Alto: 1.00m", 
        "Profundidad: 0.90m" ],
      imagen: "img/colgantegrey.jpg",
      imagenes: [ 
        "img/colgantegrey copia.jpg", 
        "img/grey1.png", 
        "img/grey2.jpg", 
        "img/grey3.jpg" ] 
      },
    
    doble: {
        id: "doble",
        titulo: "Box Doble",
        caracteristicas: [ 
          "Cerradura con triple punto de anclaje en parte superior. Cerradura con doble anclaje en parte inferior.", 
          "Sostenido por su propia estructura sin necesidad de amurarse", 
          "Brazos hidráulicos para facilitar su apertura en la parte superior y dos puertas batientes en la inferior.", 
          "Capacidad superior a los 3.700 litros.", 
          "Ignífugo.", 
          "Resistencia contra la oxidación y corrosión.", 
          "Resistencia de carga de 500kg." 
        ], 
        material: "Acero galvanizado calibre 20 (cuerpo del Box) y 14 (soportes y estructura) con un acabado de pintura electrostática color gris claro.", 
        dimensiones: [ 
          "Largo: 2.10m", 
          "Alto: 2.10m", 
          "Profundidad: 0.90m" ], 
        imagen: "img/doble.jpg", 
        imagenes: [ 
          "img/doble copia.jpg", 
          "img/doble1.jpg", 
          "img/doble2.jpg", 
          "img/doble3.jpg" 
        ] 
      }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const contenedor = document.getElementById("producto");
const p = productos[id];

if (p) {
  document.title = "Raiona | " + p.titulo;

const mailSubject = encodeURIComponent(`Consulta de precio - ${p.titulo}`);
const mailBody = encodeURIComponent(`Hola,
Quisiera recibir información y precio del siguiente producto: ${p.titulo}
Gracias.`);

  contenedor.innerHTML = `
    <a href="index.html#catalogo" class="colorN text-decoration-none volver">< Volver al catálogo</a>
    <div class="producto-detalle d-flex align-items-center" style="gap:20px; flex-wrap:wrap;">
      <div class="imagen" style="flex:1; min-width:300px;">
        <div id="carrusel" class="carrusel"></div>
      </div>
      
      <div class="info" style="flex:1; min-width:300px">
        <h2 class="mb-2">${p.titulo}</h2>

        ${p.caracteristicas ? `
          <div>
            <strong>Características:</strong>
            <ul>
              ${p.caracteristicas.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        ` : ""}
        ${p.material ? `<p><strong>Material:</strong> ${p.material}</p>` : ""}
        ${p.dimensiones ? `
          <div>
            <strong>Dimensiones:</strong>
            <ul>
              ${p.dimensiones.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        ` : ""}
      </div>
    </div>

    <p class="text-center">Conseguí tu propio Box para toda la vida, sin necesidad de mantenimiento y <b>con garantía por 5 años</b>.</p>

    <!-- BOTÓN CONSULTAR PRECIO -->
    <div class="text-center my-4">
      <a
        href="mailto:raionaarg@gmail.com?subject=Consulta%20de%20precio%20-%20${encodeURIComponent(p.titulo)}&body=${encodeURIComponent(`Hola,
        Quisiera recibir información y precio del siguiente producto: ${p.titulo}
        Gracias.`)}"
        class="button2 text-decoration-none">
        Consultar precio
      </a>
    </div>

    <p class="text-center">*El envío e instalación se cotiza según zona.</p>

  `;

  // Carrusel igual que antes
  const carrusel = document.getElementById("carrusel");
  if (p.imagenes && p.imagenes.length > 0) {
    let index = 0;
    carrusel.innerHTML = `
      <div class="carrusel-imagen">
        <img id="carrusel-img" src="${p.imagenes[0]}" alt="${p.titulo}">
      </div>
      <button id="prev" class="carrusel-btn">&#10094;</button>
      <button id="next" class="carrusel-btn">&#10095;</button>
    `;

    const thumbContainer = document.createElement("div");
    thumbContainer.id = "thumbnails";
    thumbContainer.style.cssText = `
      display:flex;
      gap:10px;
      margin-top:1rem;
      flex-wrap:wrap;
      justify-content:center;
    `;
    carrusel.parentNode.insertBefore(thumbContainer, carrusel.nextSibling);

    thumbContainer.innerHTML = p.imagenes
      .map((img, i) => `
        <img 
          src="${img}"
          class="thumb"
          data-index="${i}"
          style="
            width:60px;
            height:60px;
            object-fit:cover;
            border-radius:5px;
            cursor:pointer;
            border:2px solid ${i === 0 ? '#000' : '#ccc'};
          "
        >
      `).join("");

    document.querySelectorAll(".thumb").forEach(thumb => {
      thumb.addEventListener("click", () => {
        index = parseInt(thumb.dataset.index);
        document.getElementById("carrusel-img").src = p.imagenes[index];
        actualizarThumbs();
      });
    });

    document.getElementById("prev").addEventListener("click", () => {
      index = (index - 1 + p.imagenes.length) % p.imagenes.length;
      document.getElementById("carrusel-img").src = p.imagenes[index];
      actualizarThumbs();
    });

    document.getElementById("next").addEventListener("click", () => {
      index = (index + 1) % p.imagenes.length;
      document.getElementById("carrusel-img").src = p.imagenes[index];
      actualizarThumbs();
    });

    function actualizarThumbs() {
      document.querySelectorAll(".thumb").forEach((t, i) => {
        t.style.border = i === index ? "2px solid #000" : "2px solid #ccc";
      });
    }
  } else {
    carrusel.innerHTML = `<img src="${p.imagen}" alt="${p.titulo}" style="width:100%; border-radius:8px;">`;
  }

} else {
  contenedor.innerHTML = `<p class="text-center">Producto no encontrado 😕</p>`;
}

// Otros productos sin precios
function mostrarOtrosProductos(productoActualId) {
  const contenedorOtros = document.getElementById("otrosProductos");
  contenedorOtros.innerHTML = "";

  for (const id in productos) {
    if (id === productoActualId) continue;
    const p = productos[id];

    contenedorOtros.innerHTML += `
      <div class="col-md-3 mb-4">
        <a href="producto.html?id=${id}" class="text-decoration-none text-dark">
          <div class="card h-100 shadow-sm" style="cursor:pointer">
            <img src="${p.imagen}" class="card-img-top" alt="${p.titulo}">
            <div class="card-body">
              <h6 class="card-title">${p.titulo}</h6>
            </div>
          </div>
        </a>
      </div>
    `;
  }
}

mostrarOtrosProductos(id);
