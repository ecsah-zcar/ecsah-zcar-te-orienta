// ============================================
// ECSAH ZCAR Te Orienta - Micrositio
// ============================================

// 📚 CONTENIDO ESTUDIANTES
const contenidoEstudiantes = [
    {
    titulo: "📌 Matrícula 2026",
    descripcion: "Toda la información sobre el proceso de matrícula: fechas, requisitos, pasos y documentación necesaria.",
    enlaces: [
        { texto: "📅 Calendario Académico 2026", ruta: "documentos/Calendario-Académico-2026.pdf" },
        { texto: "📋 Oferta Académica 16-04", ruta: "documentos/Cursos-Ofertados-ECSAH-Periodo-1604.pdf" }
    ],
    desplegable: {
        titulo: "📘 Planea tu matrícula",
        enlaces: [
            { texto: "📄 Infografía 1: Consulta tu malla", ruta: "documentos/Infografía-1-Consulta-tu-malla.pdf" },
            { texto: "📄 Infografía 2: Descarga tu historial académico", ruta: "documentos/Infografía-2-Descarga-tu-historial-académico.pdf" },
            { texto: "📄 Infografía 3: Define los cursos a matricular", ruta: "documentos/Infografía-3-Define-los-cursos-a-matricular.pdf" },
            { texto: "📄 Infografía 4: Formaliza tu matrícula", ruta: "documentos/Infografía-4-Formaliza-tu-matricula.pdf" },
            { texto: "📄 Infografía 5: Conoce los periodos académicos", ruta: "documentos/Infografía-5-Conoce-los-periodos-académicos.pdf" },
            { texto: "📄 Infografía 6: No recibiste tu enlace para matricular", ruta: "documentos/Infografía-6-No-recibiste-tu-enlace-para-matricular.pdf" },
            { texto: "📄 Infografía 7: Trámites SAI", ruta: "documentos/Infografía-7-Tramites-SAI.pdf" },
            { texto: "📄 Infografía 8: Pago de matrícula", ruta: "documentos/Infografía-8-Pago-de-matricula.pdf" },
            { texto: "📄 Infografía 9: Confirmación del pago", ruta: "documentos/Infografía-9-Confirmación-del-pago.pdf" },
            { texto: "📄 Infografía 10: Solicitud de descuentos", ruta: "documentos/Infografía-10-Solicitud-de-descuentos.pdf" },
            { texto: "📄 Infografía 11: Imprimir factura", ruta: "documentos/Infografía-11-Imprimir-factura.pdf" },
            { texto: "📄 Infografía 12: Legalizar matrícula", ruta: "documentos/Infografía-12-Legalizar-matricula.pdf" },
            { texto: "📄 Infografía 13: Créditos Adicionales", ruta: "documentos/Infografía-13-Creditos-Adicionales.pdf" },
            { texto: "📄 Infografía 14: Continuidad Académica", ruta: "documentos/Infografía-14-Continuidad-Académica.pdf" },
            { texto: "📄 Infografía 15: Mínimo de créditos", ruta: "documentos/Infografía-15-Minimo-de-creditos.pdf" }
        ]
    }
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
            { texto: "📋 Protocolo de práctica profesional 3443", ruta: "documentos/Protocolo_Practicas_Psicología_Resolución_3443.pdf" },
            { texto: "📝 Requisitos de Practicas Profesionales", ruta: "documentos/Requisitos_Prácticas_Profesionales.pdf" },
            { texto: "🤝 Convenios activos", ruta: "#" }
        ]
    },
    {
        titulo: "🔄 Homologaciones - SIHO",
        descripcion: "Proceso de homologación de asignaturas a través del Sistema SIHO.",
        enlaces: [
            { texto: "📖 Manual SIHO - Rol Estudiante", ruta: "documentos/MANUAL-SHIO-Rol-Estudiante.pdf" },
            { texto: "📝 Homologaciones SENA", ruta: "documentos/Orientaciones SENA.pdf" }
        ]
    },
    {
        titulo: "📰 Noticias Saber Pro / TyT",
        descripcion: "Información actualizada sobre las pruebas Saber Pro y TyT: fechas, novedades, resultados y recursos de preparación.",
        enlaces: [
            { texto: "📰 Noticias oficiales Saber Pro", ruta: "https://noticias.unad.edu.co/index.php/saber-pro" },
            { texto: "📋 Inscripción 2026-1", ruta: "documentos/Proceso-de-Inscripción-Pruebas-Saber-Primer-Semestre-2026.pdf" },
            { texto: "❓ Preguntas frecuentes", ruta: "https://academia.unad.edu.co/pregrado-posgrado/proximos-a-graduarse/pruebas-icfes" }
        ]
    },
    {
        titulo: "🔄 Cambios de malla curricular",
        descripcion: "Resoluciones, planes de transición y equivalencias entre mallas antiguas y nuevas.",
        enlaces: [
            { texto: "📄 Cursos Res. 3443 sin oferta y sus equivalencias - Psicología 16-04", ruta: "documentos/Equivalencias-3443-para-16-04.pdf" },
            { texto: "⚖️ Resolución vigente", ruta: "#" }
        ]
    },
    {
        titulo: "🎫 Eventos de fortalecimiento disciplinar",
        descripcion: "Socialización y divulgación de los eventos académicos de la ECSAH en la Zona Caribe.",
        enlaces: [
            { texto: "📅 Calendario de eventos", ruta: "#" },
            { texto: "📋 Próximos eventos", ruta: "#" },
            { texto: "📸 Galería de eventos pasados", ruta: "#" },
            { texto: "📝 Inscripción a eventos", ruta: "#" }
        ]
    },
    {
        titulo: "🎙️ Programas radiales",
        descripcion: "Espacios de diálogo, entrevistas y contenido académico producido por la ECSAH Zona Caribe.",
        enlaces: [
            { texto: "📻 Escuchar programas grabados", ruta: "#" },
            { texto: "📅 Próximas transmisiones", ruta: "#" },
            { texto: "🎧 Podcasts disponibles", ruta: "#" },
            { texto: "📝 Participar como invitado", ruta: "#" }
        ]
    },
    {
        titulo: "🌐 Redes Sociales",
        descripcion: "Síguenos en nuestras redes sociales oficiales.",
        enlaces: [
            { texto: "📷 Instagram", ruta: "https://www.instagram.com/unad.zcar?igsh=d2llZGJmaTJlcnk=" },
            { texto: "📘 Facebook", ruta: "https://www.facebook.com/share/14fm1HT8Paf/" },
            { texto: "📧 Correo ECSAH ZCAR", ruta: "mailto:ecsah.zcar@unad.edu.co" }
        ]
    }
];

// 👩‍🏫 CONTENIDO DOCENTES
const contenidoDocentes = [
    {
        titulo: "🔬 CIPAS",
        descripcion: "Lineamientos, formato guía CIPAS para proyectos de investigación e innovación.",
        enlaces: [
            { texto: "📄 Instructivo Oferta de CIPAS", ruta: "documentos/Oferta-de-CIPAS-Docentes.pdf" },
            { texto: "📋 Primera Matrícula", ruta: "#" },
            { texto: "📋 Cursos de Alta Complejidad", ruta: "#" },
            { texto: "📋 CIPAS Territoriales", ruta: "#" }
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
        descripcion: "Proceso de admisión para el programa de Psicología: requisitos, fechas y documentación.",
        enlaces: [
            { texto: "📅 Calendario de admisión", ruta: "#" },
            { texto: "📋 Requisitos", ruta: "#" },
            { texto: "📝 Formulario de inscripción", ruta: "#" }
        ]
    },
    {
        titulo: "🔍 Investigación",
        descripcion: "Convocatorias internas, semilleros de investigación y recursos para proyectos.",
        enlaces: [
            { texto: "📋 Semilleros de Investigación", ruta: "#" },
            { texto: "📢 Convocatorias vigentes", ruta: "#" }
        ]
    }
];

// ============================================
// FUNCIONES COMUNES
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
    if (item.enlaces && item.enlaces.length) {
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
    }
    card.appendChild(header);
    card.appendChild(body);
    return card;
}

function renderizarGrid(contenido, contenedorId) {
    const grid = document.getElementById(contenedorId);
    if (!grid) return;
    grid.innerHTML = '';
    contenido.forEach(item => grid.appendChild(crearTarjeta(item)));
}

function filtrarTarjetas(contenido, textoBusqueda) {
    if (!textoBusqueda.trim()) return contenido;
    const lowerQuery = textoBusqueda.toLowerCase();
    return contenido.filter(item => 
        item.titulo.toLowerCase().includes(lowerQuery) || 
        item.descripcion.toLowerCase().includes(lowerQuery) ||
        (item.enlaces && item.enlaces.some(e => e.texto.toLowerCase().includes(lowerQuery)))
    );
}

// ============================================
// PROTECCIÓN PARA DOCENTES
// ============================================

const DOCENTE_PASSWORD = "docentesECSAH2026";
let docenteUnlocked = false;
let currentTab = 'estudiantes';
let allEstudiantes = [...contenidoEstudiantes];
let allDocentes = [...contenidoDocentes];

function checkDocenteAccess() {
    const docenteContent = document.getElementById('docenteContent');
    const lockScreen = document.getElementById('docenteLockScreen');
    if (docenteUnlocked) {
        docenteContent.style.display = 'block';
        lockScreen.style.display = 'none';
        if (document.getElementById('gridDocentes').children.length === 0) {
            renderizarGrid(allDocentes, 'gridDocentes');
        }
    } else {
        docenteContent.style.display = 'none';
        lockScreen.style.display = 'flex';
    }
}

function unlockDocente() {
    const passwordInput = document.getElementById('passwordInput');
    const errorMsg = document.getElementById('errorMsg');
    if (passwordInput.value === DOCENTE_PASSWORD) {
        docenteUnlocked = true;
        errorMsg.textContent = '';
        passwordInput.value = '';
        checkDocenteAccess();
        if (currentTab === 'docentes') updateSearch();
    } else {
        errorMsg.textContent = '❌ Contraseña incorrecta. Acceso denegado.';
        passwordInput.value = '';
    }
}

function updateSearch() {
    const searchTerm = document.getElementById('searchInput')?.value || '';
    if (currentTab === 'estudiantes') {
        const filtrados = filtrarTarjetas(allEstudiantes, searchTerm);
        renderizarGrid(filtrados, 'gridEstudiantes');
    } else if (currentTab === 'docentes' && docenteUnlocked) {
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
            if (tabId === 'docentes' && !docenteUnlocked) {
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                contents.forEach(content => content.classList.remove('active'));
                document.getElementById(tabId).classList.add('active');
                currentTab = tabId;
                checkDocenteAccess();
                return;
            }
            if ((tabId === 'docentes' && docenteUnlocked) || tabId === 'estudiantes') {
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                contents.forEach(content => content.classList.remove('active'));
                document.getElementById(tabId).classList.add('active');
                currentTab = tabId;
                updateSearch();
                if (tabId === 'docentes') checkDocenteAccess();
            }
        });
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    renderizarGrid(allEstudiantes, 'gridEstudiantes');
    initTabs();
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.addEventListener('input', updateSearch);
    const unlockBtn = document.getElementById('unlockBtn');
    if (unlockBtn) unlockBtn.addEventListener('click', unlockDocente);
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput) passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') unlockDocente();
    });
    checkDocenteAccess();
    currentTab = 'estudiantes';
});
