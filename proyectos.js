const proyectos = {
    mansainn: {
        "id": 1,
        "title": "Mansa Inn",
        "departamento": "Punta del Este",
        "description": "Descripción del proyecto 1",
        "image": "img/mansainn/mansainn1.png",
        "imagenes": [
            "img/mansainn/mansainn1.png",
            "img/mansainn/mansainn2.png",
            "img/mansainn/mansainn3.png"
        ]
    },
    yoo: {
        "id": 2,
        "title": "Yoo by Starck",
        "departamento": "Punta del Este",
        "description": "Descripción del proyecto 2",
        "image": "img/yoo/yoo1.jpeg",
        "imagenes": [
            "img/yoo/yoo1.jpeg",
            "img/yoo/yoo2.jpeg",
            "img/yoo/yoo3.jpeg"
        ]
    },
    carrascoboating: {
        "id": 3,
        "title": "Carrasco Boating",
        "departamento": "Montevideo",
        "description": "Descripción del proyecto 3",
        "image": "img/carrasco/carrasco1.jpg",
        "imagenes": [
            "img/carrasco/carrasco1.jpg",
            "img/carrasco/carrasco2.png",
            "img/carrasco/carrasco3.jpg"
        ]
    },
    venetian: {
        "id": 4,
        "title": "Venetian",
        "departamento": "Punta del Este",
        "description": "Descripción del proyecto 4",
        "image": "img/venetian/venetian1.jpg",
        "imagenes": [
            "img/venetian/venetian1.jpg",
            "img/venetian/venetian2.jpg",
            "img/venetian/venetian3.jpg"
        ]
    },
    swing23: {
        "id": 5,
        "title": "Swing 23",
        "departamento": "Montevideo",
        "description": "Descripción del proyecto 5",
        "image": "img/swing23/swing1.png",
        "imagenes": [
            "img/swing23/swing1.png",
            "img/swing23/swing2.png",
            "img/swing23/swing3.png"
        ]
    },
    fendi: {
        "id": 6,
        "title": "Fendi Chateau",
        "departamento": "Punta del Este",
        "description": "Descripción del proyecto 6",
        "image": "img/fendi/fendi1.png",
        "imagenes": [
            "img/fendi/fendi1.png",
            "img/fendi/fendi2.png",
            "img/fendi/fendi3.png"
        ]
    }    
};

// =========================
// GENERAR CARDS
// =========================
const container = document.getElementById('proyectosContainer');

Object.values(proyectos).forEach(proyecto => {
    const card = document.createElement('div');
    card.classList.add('card-banner');

    card.innerHTML = `
        <img src="${proyecto.image}" alt="${proyecto.title}">
        <div class="overlay">
            <div class="title">${proyecto.title}</div>
            <div class="subtitle">${proyecto.departamento}, Uruguay.</div>
        </div>
    `;

    card.addEventListener('click', () => abrirModal(proyecto));

    container.appendChild(card);
});

// =========================
// MODAL
// =========================
const modal = document.getElementById('modalProyecto');
const closeModal = document.getElementById('closeModal');

function abrirModal(data) {
    document.getElementById('modalTitulo').textContent = data.title;
    document.getElementById('modalDepto').textContent = data.departamento;/* 
    document.getElementById('modalDescripcion').textContent = data.description; */

    // Insertar imágenes
    const imgContainer = document.getElementById('modalImagenes');
    imgContainer.innerHTML = "";
    data.imagenes.forEach(img => {
        imgContainer.innerHTML += `<img src="${img}" alt="">`;
    });

    modal.style.display = "flex";
}

closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };