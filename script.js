// ============================================
// ECSAH ZCAR Te Orienta - Micrositio
// Contenido para estudiantes y docentes
// ============================================

// 📚 CONTENIDO PARA ESTUDIANTES
const contenidoEstudiantes = [
    {
        titulo: "📌 Matrícula 2026",
        descripcion: "Toda la información sobre el proceso de matrícula: fechas, requisitos, pasos y documentación necesaria.",
        enlaces: [
            { texto: "📅 Calendario Académico 2026", ruta: "documentos/Calendario-Académico-2026.pdf" }
        ]
    },
    {
        titulo: "🎓 Opciones de grado",
        descripcion: "Conoce las diferentes opciones para tu trabajo de grado: proyecto aplicado, diplomado, artículo, etc.",
        enlaces: [
            { texto: "📘 Opciones de Grado - Guía completa", ruta: "documentos/Opciones-de-Grado.pdf" },
            { texto: "📖 Información General Sobre Grado", ruta: "https://academia.unad.edu.co/pregrado-posgrado/proximos-a-graduarse/grados" }
        ]
    },
    {
        titulo: "💼 Prácticas profesionales",
        descripcion: "Documentación, seguimiento, convenios, informe final y carta de presentación para tu práctica.",
        enlaces: [
            { texto: "📋 Guía de práctica profesional", ruta: "#" },
            { texto: "📝 Formatos de seguimiento", ruta: "#" },
            { texto: "🤝 Convenios activos", ruta: "#" }
        ]
    },
    {
        titulo: "🔄 Homologaciones - SIHO",
        descripcion: "Proceso de homologación de asignaturas a través del Sistema SIHO.",
        enlaces: [
            { texto: "📖 Manual SIHO - Rol Estudiante", ruta: "documentos/MANUAL-SHIO-Rol-Estudiante.pdf" },
            { texto: "📝 Pruebas de suficiencia", ruta: "#" }
        ]
    },
    {
        titulo: "📰 Noticias Saber Pro / TyT",
        descripcion: "Información actualizada sobre las pruebas Saber Pro y TyT: fechas, novedades, resultados y recursos de preparación.",
        enlaces: [
            { texto: "📰 Noticias oficiales Saber Pro", ruta: "https://noticias.unad.edu.co/index.php/saber-pro" },
            { texto: "📋 Inscripción 2026-1", ruta: "documentos/Proceso de Inscripción Pruebas Saber Primer Semestre 2026.pdf" },
            { texto: "❓ Preguntas frecuentes", ruta: "https://academia.unad.edu.co/pregrado-posgrado/proximos-a-graduarse/pruebas-icfes" }
        ]
    },
    {
        titulo: "🔄 Cambios de malla curricular",
        descripcion: "Resoluciones, planes de transición y equivalencias entre mallas antiguas y nuevas.",
        enlaces: [
            { texto: "📄 Documento de transición 16-04", ruta: "documentos/Equivalencias 3443 para 16-04.pdf" },
            { texto: "⚖️ Resolución vigente", ruta: "#" }
        ]
    },
    {
        titulo: "🎫 Eventos de fortalecimiento disciplinar",
        descripcion: "Socialización y divulgación de los eventos académicos de la ECSAH en la Zona Caribe. Conferencias, talleres, seminarios y encuentros.",
        enlaces: [
            { texto: "📅 Calendario de eventos", ruta: "#" },
            { texto: "📋 Próximos eventos", ruta: "#" },
            { texto: "📸 Galería de eventos pasados", ruta: "#" },
            { texto: "📝 Inscripción a eventos", ruta: "#" }
        ]
    },
    {
        titulo: "🎙️ Programas radiales",
        descripcion: "Espacios de diálogo, entrevistas y contenido académico producido por la ECSAH Zona Caribe para toda la comunidad.",
        enlaces: [
            { texto: "📻 Escuchar programas grabados", ruta: "#" },
            { texto: "📅 Próximas transmisiones", ruta: "#" },
            { texto: "🎧 Podcasts disponibles", ruta: "#" },
            { texto: "📝 Participar como invitado", ruta: "#" }
        ]
    },
    {
        titulo: "📚 Recursos útiles",
        descripcion: "Calendario académico, correo institucional, tutoriales y biblioteca virtual.",
        enlaces: [
            { texto: "📅 Calendario Académico 2026", ruta: "documentos/Calendario-Académico-2026.pdf" },
            { texto: "📧 Correo UNAD", ruta: "#" },
            { texto: "🎓 Tutorial de matrícula", ruta: "#" }
        ]
    }
];

// 👩‍🏫 CONTENIDO PARA DOCENTES
const contenidoDocentes = [
    {
        titulo: "🔬 CIPAS",
        descripcion: "Lineamientos, formato guía CIPAS para proyectos de investigación e innovación.",
        enlaces: [
            { texto: "📄 Lineamientos CIPAS", ruta: "#" },
            { texto: "📋 Formato guía editable", ruta: "#" },
            { texto: "📖 Cipas Territoriales, ruta: "#"},
        ]
    },
    {
        titulo: "🔄 Sistema de Homologación (SIHO)",
        descripcion: "Construcción de procuradores e instructivo técnico y administrativo.",
        enlaces: [
            { texto: "📋 Responsables", ruta: "#" },
            { texto: "🎥 Vídeo tutorial", ruta: "#" }
        ]
    },
    {
        titulo: "✅ Ruta de admisión Psicología",
        descripcion: "Configuración, aplicación y reportes de pruebas finales Microtest.",
        enlaces: [
            { texto: "📅 Calendario de pruebas", ruta: "#" }
        ]
    },
    {
        titulo: "🔍 Investigación",
        descripcion: "Microtest para investigación, convocatorias internas y semilleros.",
        enlaces: [
            { texto: "📋 Semilleros de Investigación", ruta: "#" },
            { texto: "📢 Convocatorias vigentes", ruta: "#" }
        ]
    }
];

// ============================================
// FUNCIONES DEL MICROSITIO
// ============================================

function crearTarjeta(item) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const header = document.createElement('div');
    header.className = 'card-header';
    header.innerText = item.titulo;
    
    const body = document.createElement('div');
    body.className = 'card-body';
    
    const desc = document.createElement('p');
    desc.innerText = item.descripcion;
    body.appendChild(desc);
    
    const lista = document.createElement('ul');
    item.enlaces.forEach(enlace => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = enlace.ruta;
        link.className = 'btn-enlace';
        link.innerText = enlace.texto;
        link.target = "_blank";
        li.appendChild(link);
        lista.appendChild(li);
    });
    body.appendChild(lista);
    
    card.appendChild(header);
    card.appendChild(body);
    return card;
}

function renderizarGrid(contenido, contenedorId) {
    const grid = document.getElementById(contenedorId);
    if (!grid) return;
    grid.innerHTML = '';
    contenido.forEach(item => {
        const tarjeta = crearTarjeta(item);
        grid.appendChild(tarjeta);
    });
}

function filtrarTarjetas(contenido, textoBusqueda) {
    if (!textoBusqueda.trim()) return contenido;
    const lowerQuery = textoBusqueda.toLowerCase();
    return contenido.filter(item => 
        item.titulo.toLowerCase().includes(lowerQuery) || 
        item.descripcion.toLowerCase().includes(lowerQuery) ||
        item.enlaces.some(e => e.texto.toLowerCase().includes(lowerQuery))
    );
}

let currentTab = 'estudiantes';
let allEstudiantes = [...contenidoEstudiantes];
let allDocentes = [...contenidoDocentes];

function updateSearch() {
    const searchTerm = document.getElementById('searchInput')?.value || '';
    if (currentTab === 'estudiantes') {
        const filtrados = filtrarTarjetas(allEstudiantes, searchTerm);
        renderizarGrid(filtrados, 'gridEstudiantes');
    } else {
        const filtrados = filtrarTarjetas(allDocentes, searchTerm);
        renderizarGrid(filtrados, 'gridDocentes');
    }
}

function initTabs() {
    const btns = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            contents.forEach(content => content.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            currentTab = tabId;
            updateSearch();
        });
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderizarGrid(allEstudiantes, 'gridEstudiantes');
    renderizarGrid(allDocentes, 'gridDocentes');
    initTabs();
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', updateSearch);
    }
    currentTab = 'estudiantes';
});
