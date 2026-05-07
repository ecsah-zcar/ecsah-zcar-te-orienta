// Datos de estudiantes: cada tarjeta tiene título, descripción, lista de enlaces/puntos clave
const contenidoEstudiantes = [
    {
        titulo: "📌 Matrícula",
        descripcion: "Oferta de cursos, fechas importantes, aplazamientos, ruta de matrícula, mínimo y máximo de créditos.",
        items: ["Ver calendario", "Ruta de matrícula PDF", "Cambio de grupo", "Preguntas frecuentes"]
    },
    {
        titulo: "🎓 Opciones de grado",
        descripcion: "Requisitos, opciones (proyecto aplicado, diplomado, trabajo dirigido, artículo), procedimientos y normativa vigente.",
        items: ["Requisitos de grado", "Formatos de inscripción", "Normativa resolución 123", "Cronograma actual"]
    },
    {
        titulo: "💼 Prácticas profesionales",
        descripcion: "Documentación, seguimiento, convenios, informe final y carta de presentación. Todo para tu práctica.",
        items: ["Guía de práctica", "Formatos de seguimiento", "Convenios activos", "Bitácora de práctica"]
    },
    {
        titulo: "🔄 Homologaciones",
        descripcion: "Proceso de homologación de asignaturas (SIHO), instructivos y plazos.",
        items: ["Instructivo SIHO", "Solicitud en línea", "Tabla de equivalencias", "Requisitos"]
    },
    {
        titulo: "📊 Saber Pro / TyT",
        descripcion: "Fechas de eventos, preguntas frecuentes, contacto y preparación.",
        items: ["Calendario Saber Pro", "Preguntas frecuentes", "Contacto asesor", "Simulacro"]
    },
    {
        titulo: "🔄 Cambios de malla curricular",
        descripcion: "Resoluciones, planes de transición, equivalencias entre mallas antiguas y nuevas.",
        items: ["Documento de transición", "Resolución vigente", "Solicitar equivalencia", "Plan de estudios por programa"]
    },
    {
        titulo: "📚 Recursos útiles",
        descripcion: "Calendario académico, correo institucional, tutoriales, biblioteca virtual.",
        items: ["Calendario 2025", "Correo UNAD", "Tutorial de matrícula", "Biblioteca digital"]
    },
    {
        titulo: "📝 Pruebas de suficiencia",
        descripcion: "Procedimiento para presentar pruebas de suficiencia en idiomas o asignaturas.",
        items: ["Instructivo", "Fechas de inscripción", "Resultados", "Requisitos"]
    }
];

const contenidoDocentes = [
    {
        titulo: "📖 Gestión del curso",
        descripcion: "Organización de grupos, centralización de calificaciones, correo académico y recalificación.",
        items: ["Manual de calificaciones", "Grupos y aulas", "Formato de recalificación", "Políticas de evaluación"]
    },
    {
        titulo: "🔬 CIPAS",
        descripcion: "Lineamientos, formato guía CIPAIS para proyectos de investigación e innovación.",
        items: ["Lineamientos CIPAS", "Formato guía editable", "Cronograma convocatoria", "Rúbrica de evaluación"]
    },
    {
        titulo: "🔄 Sistema de Homologación (SIHO)",
        descripcion: "Construcción de procuradores, instructivo técnico y administrativo.",
        items: ["Manual SIHO docente", "Formato procuradores", "Vídeo tutorial", "Soporte técnico"]
    },
    {
        titulo: "✅ Pruebas finales - Microtest",
        descripcion: "Configuración, aplicación y reportes de pruebas finales Microtest.",
        items: ["Guía de Microtest", "Calendario de pruebas", "Reportes por curso", "Solución de problemas"]
    },
    {
        titulo: "📦 Alistamiento de cursos",
        descripcion: "Capacitaciones, lineamientos de internacionalización, recursos educativos OVAS/OVIS.",
        items: ["Capacitaciones disponibles", "Lineamentos OVAS", "Banco de OVIS", "Internacionalización"]
    },
    {
        titulo: "🌐 Redes académicas",
        descripcion: "Lineamientos, matrices de red de curso y matrices curriculares.",
        items: ["Matriz de red de curso ejemplo", "Matriz curricular", "Lineamientos generales", "Reuniones de red"]
    },
    {
        titulo: "🔍 Investigación",
        descripcion: "Microtest para investigación, convocatorias internas, semilleros.",
        items: ["Formatos Microtest", "Convocatorias vigentes", "Semilleros de investigación", "Grupos reconocidos"]
    }
];

function crearTarjeta(item) {
    // Crear elementos HTML
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
    item.items.forEach(enlaceTexto => {
        const li = document.createElement('li');
        // Simulamos enlaces internos (puedes cambiar por PDFs reales)
        const link = document.createElement('a');
        link.href = '#'; // Aquí podrías poner rutas a PDFs ej: "/documentos/matricula.pdf"
        link.className = 'btn-enlace';
        link.innerText = enlaceTexto;
        // click prevention demo
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`📄 Aquí se abriría el documento: ${enlaceTexto}. En la versión final, sustituye # por la ruta real del PDF.`);
        });
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
    grid.innerHTML = '';
    contenido.forEach(item => {
        const tarjeta = crearTarjeta(item);
        grid.appendChild(tarjeta);
    });
}

// Filtro de búsqueda (simple por título y descripción)
function filtrarTarjetas(contenido, textoBusqueda) {
    if (!textoBusqueda.trim()) return contenido;
    const lowerQuery = textoBusqueda.toLowerCase();
    return contenido.filter(item => 
        item.titulo.toLowerCase().includes(lowerQuery) || 
        item.descripcion.toLowerCase().includes(lowerQuery) ||
        item.items.some(i => i.toLowerCase().includes(lowerQuery))
    );
}

// Aplicar filtro al contenido activo
let currentTab = 'estudiantes';
let allEstudiantes = [...contenidoEstudiantes];
let allDocentes = [...contenidoDocentes];

function updateSearch() {
    const searchTerm = document.getElementById('searchInput').value;
    if (currentTab === 'estudiantes') {
        const filtrados = filtrarTarjetas(allEstudiantes, searchTerm);
        renderizarGrid(filtrados, 'gridEstudiantes');
    } else {
        const filtrados = filtrarTarjetas(allDocentes, searchTerm);
        renderizarGrid(filtrados, 'gridDocentes');
    }
}

// Manejo de pestañas
function initTabs() {
    const btns = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            // Cambiar pestaña activa visualmente
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            contents.forEach(content => content.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            currentTab = tabId;
            // Refrescar búsqueda en la nueva pestaña
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
    searchInput.addEventListener('input', updateSearch);
    // Seleccionar pestaña estudiantes por defecto
    currentTab = 'estudiantes';
});