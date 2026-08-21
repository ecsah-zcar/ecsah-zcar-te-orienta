// ============================================
// ECSAH ZCAR Te Orienta - Micrositio
// ============================================

// 📚 CONTENIDO ESTUDIANTES (actualizado)
const contenidoEstudiantes = [
    // Fila 1: tres tarjetas
    {
        titulo: "📌 Matrícula 2026",
        descripcion: "Toda la información sobre el proceso de matrícula: fechas, requisitos, pasos y documentación necesaria.",
        enlaces: [
            { texto: "📅 Calendario Académico 2026", ruta: "documentos/Calendario-Académico-2026.pdf" },
            { texto: "📋 Oferta Académica 16-05", ruta: "documentos/Oferta_Academica_ECSAH_16-05_2026.pdf" }
        ],
        desplegable: {
            titulo: "Planea tu matrícula",
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
        titulo: "🔬 Investigación",
        descripcion: "Descubre los proyectos, semilleros y convocatorias de investigación de la ECSAH Zona Caribe.",
        enlaces: [
            { texto: "🧪 Semilleros de Investigación", ruta: "documentos/Semilleros_ECSAH_ZCAR.pdf" },
            { texto: "📢 Próximas convocatorias", ruta: "https://noticias.unad.edu.co/index.php/noticias-unad/abierta-la-convocatoria-n-007-de-2026-para-la-conformacion-de-nuevos-semilleros-y-reactivacion-de-aquellos-que-hayan-perdido-su-aval-institucional-vigencia-2027" },
            { texto: "📋 Proyectos actuales", ruta: "#" },
            { texto: "📄 Resultados y publicaciones", ruta: "#" }
        ]
    },
    {
        titulo: "🎓 Opciones de grado y prácticas",
        descripcion: "Conoce las opciones para tu trabajo de grado y los requisitos para prácticas profesionales.",
        enlaces: [
            { texto: "📘 Opciones de Grado - Guía completa", ruta: "documentos/Opciones-de-Grado.pdf" },
            { texto: "📖 Información General Sobre Grado", ruta: "https://academia.unad.edu.co/pregrado-posgrado/proximos-a-graduarse/grados" },
            { texto: "📋 Protocolo de práctica profesional 3443", ruta: "documentos/Protocolo_Practicas_Psicología_Resolución_3443.pdf" },
            { texto: "📝 Requisitos de Practicas Profesionales", ruta: "documentos/Requisitos_Prácticas_Profesionales.pdf" },
            { texto: "🤝 Convenios activos", ruta: "#" }
        ]
    },
    // Fila 2: tarjeta ancha (Programas)
    {
        titulo: "📚 Programas de la ECSAH",
        descripcion: "Conoce la oferta académica de pregrado de la Escuela de Ciencias Sociales, Artes y Humanidades.",
        horizontal: true,
        programas: [
            { icono: "fa-palette", nombre: "Artes Visuales", resolucion: "Res. 020540 - 2022", ruta: "https://estudios.unad.edu.co/artes-visuales" },
            { icono: "fa-brain", nombre: "Psicología", resolucion: "Res. 012986 - 2022", ruta: "https://estudios.unad.edu.co/psicologia" },
            { icono: "fa-bullhorn", nombre: "Comunicación Social", resolucion: "Res. 019845 - 2020", ruta: "https://estudios.unad.edu.co/comunicacion-social" },
            { icono: "fa-puzzle-piece", nombre: "Filosofía", resolucion: "Res. 014430 - 2023", ruta: "https://estudios.unad.edu.co/filosofia" },
            { icono: "fa-landmark", nombre: "Historia", resolucion: "Res. 011187 - 2024", ruta: "https://estudios.unad.edu.co/historia" },
            { icono: "fa-guitar", nombre: "Música", resolucion: "Res. 023939 - 2023", ruta: "https://estudios.unad.edu.co/musica" },
            { icono: "fa-users", nombre: "Sociología", resolucion: "Res. 011631 - 2023", ruta: "https://estudios.unad.edu.co/sociologia" },
            { icono: "fa-hands-helping", nombre: "Trabajo Social", resolucion: "Res. 007068 - 2026", ruta: "https://estudios.unad.edu.co/trabajo-social" }
        ]
    },
    // Fila 3: tres tarjetas
    {
        titulo: "📋 Procesos académico-administrativos",
        descripcion: "Gestiona tus trámites académicos y administrativos: homologaciones, aplazamientos, FUS y más.",
        enlaces: [
            { texto: "📄 Descargar FUS en PDF", ruta: "documentos/F-7-2-1_Formato_FUS.pdf" },
            { texto: "📄 Instructivo Homologaciones", ruta: "documentos/MANUAL-SHIO-Rol-Estudiante.pdf" }
        ],
        botonesModal: [
            { texto: "🔄 Acuerdos de Homologaciones", modalId: "modalHomologaciones" },
            { texto: "📅 Aplazamientos", modalId: "modalAplazamientos" },
            { texto: "📋 Guía FUS", modalId: "modalFUS" }
        ]
    },
    {
        titulo: "🎪 Eventos de fortalecimiento disciplinar",
        descripcion: "Socialización y divulgación de los eventos académicos de la ECSAH en la Zona Caribe. Incluye los programas radiales de la escuela.",
        enlaces: [
            { texto: "📅 Calendario de eventos", ruta: "#" },
            { texto: "📋 Próximos eventos", ruta: "#" },
            { texto: "📸 Galería de eventos pasados", ruta: "#" },
            { texto: "📝 Inscripción a eventos", ruta: "#" }
        ],
        botonesModal: [
            { texto: "🎙️ Programas radiales", modalId: "modalRadiales" }
        ]
    },
    {
        titulo: "📰 Noticias Saber Pro / TyT",
        descripcion: "Información actualizada sobre las pruebas Saber Pro y TyT: fechas, novedades, resultados y recursos.",
        enlaces: [
            { texto: "📰 Noticias oficiales Saber Pro", ruta: "https://noticias.unad.edu.co/index.php/saber-pro" },
            { texto: "📋 Inscripción 2026-1", ruta: "documentos/Proceso-de-Inscripción-Pruebas-Saber-Primer-Semestre-2026.pdf" },
            { texto: "❓ Preguntas frecuentes", ruta: "https://academia.unad.edu.co/pregrado-posgrado/proximos-a-graduarse/pruebas-icfes" }
        ]
    }
];

// ============================================
// CONTENIDO PARA MODALES DE PROCESOS
// ============================================

const contenidoHomologaciones = [
    { texto: "📖 Convenio Artes Visuales - Inst. Bellas Artes - Duitama", ruta: "documentos/Convenio_Artes Visuales_INSTITUTO_BELLAS_ARTES_DUITAMA.pdf" },
    { texto: "📝 Convenio Comunicación Social - ACAJEL", ruta: "documentos/Convenio_Comunicacion Social_Competencias_Locución_Academia_Comunicación JAIME ECHEVERRY LOAIZA “ACAJEL”.pdf" },
    { texto: "📖 Convenio Comunicación Social - INSTEL TLLRPTV", ruta: "documentos/Convenio_Comunicación Social_Instel_TLLRPTV.pdf" },
    { texto: "📝 Convenio Comunicación Social - Social ARTV", ruta: "documentos/Convenio_Comunicación_Social_ARTV.pdf" },
    { texto: "📖 Convenio Comunicación Social - Comunicadores Empíricos", ruta: "documentos/Convenio_Comunicación_Social_RECONOCIMIENTO_EXPERIENCIA_COMUNICADORES_EMPIRICOS.pdf" },
    { texto: "📝 Convenio Filosofía - Seminarios y Comunidades Religiosas", ruta: "documentos/Convenio_Filosofía_planes_de_estudio_Seminarios_y_Comunidades.pdf" },
    { texto: "📖 Convenio Comunicación Social - INSTEL TLL", ruta: "documentos/Convenio_Comunicación_Social_Instel_TLL.pdf" },
    { texto: "📝 Convenio Comunicación Social - COMULDESA 2017", ruta: "documentos/Convenio_Comunicacion_Social_COMULDESA_2017.pdf" },
    { texto: "📖 Homologaciones SENA", ruta: "documentos/Orientaciones SENA.pdf" }
];

const contenidoAplazamientos = [
    { texto: "📋 Formato solicitud aplazamiento", ruta: "documentos/Formato-Aplazamiento.pdf" },
    { texto: "📅 Calendario de fechas límite", ruta: "documentos/Calendario-Aplazamientos.pdf" },
    { texto: "📝 Instructivo para aplazamiento", ruta: "documentos/Instructivo-Aplazamiento.pdf" }
];

const contenidoRadiales = [
    { texto: "📻 Escuchar programas grabados", ruta: "#" },
    { texto: "📅 Próximas transmisiones", ruta: "#" },
    { texto: "🎧 Podcasts disponibles", ruta: "#" },
    { texto: "📝 Participar como invitado", ruta: "#" }
];

// ============================================
// CONTENIDO DOCENTES (sin cambios)
// ============================================

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
    
    // Si es horizontal, añadir clase especial
    if (item.horizontal) {
        card.classList.add('card-programas');
    }
    
    const header = document.createElement('div');
    header.className = 'card-header';
    const emojiMatch = item.titulo.match(/^[^\w\s]+/);
    const emoji = emojiMatch ? emojiMatch[0] : '📌';
    const tituloLimpio = item.titulo.replace(/^[^\w\s]+\s*/, '');
    header.innerHTML = `<span class="card-icon">${emoji}</span> ${tituloLimpio}`;
    card.appendChild(header);
    
    const body = document.createElement('div');
    body.className = 'card-body';
    
    const desc = document.createElement('p');
    desc.innerText = item.descripcion;
    body.appendChild(desc);
    
    // Botón "Planea tu matrícula" (solo para la tarjeta de Matrícula)
    if (item.desplegable) {
        const wrapper = document.createElement('div');
        wrapper.style.marginTop = '1rem';
        const btn = document.createElement('button');
        btn.className = 'btn-enlace';
        btn.style.background = '#FFF3E0';
        btn.style.color = '#5D4037';
        btn.style.fontWeight = 'bold';
        btn.innerText = `📘 ${item.desplegable.titulo}`;
        btn.addEventListener('click', () => {
            abrirModal(item.desplegable.enlaces, item.desplegable.titulo);
        });
        wrapper.appendChild(btn);
        body.appendChild(wrapper);
    }
    
    // Enlaces normales
    if (item.enlaces && item.enlaces.length > 0 && !item.horizontal) {
        const lista = document.createElement('ul');
        item.enlaces.forEach(enlace => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = enlace.ruta;
            link.className = 'btn-enlace';
            link.innerHTML = enlace.texto;
            link.target = "_blank";
            li.appendChild(link);
            lista.appendChild(li);
        });
        body.appendChild(lista);
    }
    
    // Si es horizontal (Programas de la ECSAH) → usa la estructura programas
    if (item.horizontal && item.programas) {
        const wrapper = document.createElement('div');
        wrapper.className = 'programas-grid';
        
        item.programas.forEach(prog => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'programa-item';
            
            const link = document.createElement('a');
            link.href = prog.ruta;
            link.target = "_blank";
            link.innerHTML = `
                <span class="programa-icono"><i class="fas ${prog.icono}"></i></span>
                <span class="programa-nombre">${prog.nombre}</span>
                <span class="programa-resolucion">${prog.resolucion}</span>
            `;
            
            itemDiv.appendChild(link);
            wrapper.appendChild(itemDiv);
        });
        body.appendChild(wrapper);
    }
    
    // Botones para modales de procesos
    if (item.botonesModal && item.botonesModal.length > 0) {
        const wrapper = document.createElement('div');
        wrapper.style.marginTop = '1rem';
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';
        wrapper.style.gap = '0.5rem';
        item.botonesModal.forEach(boton => {
            const btn = document.createElement('button');
            btn.className = 'btn-enlace';
            btn.style.background = '#FFF3E0';
            btn.style.color = '#5D4037';
            btn.style.fontWeight = 'bold';
            btn.innerText = boton.texto;
            btn.addEventListener('click', () => {
                // Si es el modal de radiales, usamos un contenido especial
                if (boton.modalId === 'modalRadiales') {
                    abrirModal(contenidoRadiales, 'Programas radiales');
                } else {
                    abrirModalProceso(boton.modalId);
                }
            });
            wrapper.appendChild(btn);
        });
        body.appendChild(wrapper);
    }
    
    card.appendChild(body);
    return card;
}

function renderizarGrid(contenido, contenedorId) {
    const grid = document.getElementById(contenedorId);
    if (!grid) return;
    grid.innerHTML = '';
    contenido.forEach((item, index) => {
        const tarjeta = crearTarjeta(item);
        tarjeta.style.animationDelay = `${0.05 * (index + 1)}s`;
        grid.appendChild(tarjeta);
    });
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
// FUNCIONES UNIFICADAS PARA MODALES
// ============================================

let modalAbierto = false;

function abrirModalGenerico(modalId) {
    const overlay = document.getElementById(modalId);
    if (!overlay) return;
    if (overlay.style.display === 'flex') return;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    modalAbierto = true;
    // Cargar contenido dinámico solo para homologaciones y aplazamientos
    if (modalId === 'modalHomologaciones') {
        const grid = document.getElementById('gridHomologaciones');
        if (grid && grid.children.length === 0) {
            contenidoHomologaciones.forEach(item => {
                const div = document.createElement('div');
                div.className = 'modal-item';
                div.innerHTML = `
                    <span class="emoji">📄</span>
                    <a href="${item.ruta}" target="_blank">${item.texto}</a>
                `;
                grid.appendChild(div);
            });
        }
    } else if (modalId === 'modalAplazamientos') {
        const grid = document.getElementById('gridAplazamientos');
        if (grid && grid.children.length === 0) {
            contenidoAplazamientos.forEach(item => {
                const div = document.createElement('div');
                div.className = 'modal-item';
                div.innerHTML = `
                    <span class="emoji">📄</span>
                    <a href="${item.ruta}" target="_blank">${item.texto}</a>
                `;
                grid.appendChild(div);
            });
        }
    }
}

function cerrarModalGenerico(modalId) {
    const overlay = document.getElementById(modalId);
    if (!overlay) return;
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
    modalAbierto = false;
}

// Funciones específicas para compatibilidad
function abrirModal(enlaces, titulo) {
    const overlay = document.getElementById('modalInfografias');
    const grid = document.getElementById('modalGrid');
    const titleEl = document.getElementById('modalTitle');
    if (!overlay || !grid) return;
    if (overlay.style.display === 'flex') return;
    titleEl.innerText = `📘 ${titulo}`;
    grid.innerHTML = '';
    enlaces.forEach(enlace => {
        const div = document.createElement('div');
        div.className = 'modal-item';
        const textoLimpio = enlace.texto.replace(/^[📄📘📋📅📝📖📊📰📷🎓]\s*/, '').trim();
        div.innerHTML = `
            <span class="emoji">📄</span>
            <a href="${enlace.ruta}" target="_blank">${textoLimpio}</a>
        `;
        grid.appendChild(div);
    });
    abrirModalGenerico('modalInfografias');
}

function cerrarModal() {
    cerrarModalGenerico('modalInfografias');
}

function abrirModalProceso(modalId) {
    abrirModalGenerico(modalId);
}

function cerrarModalProceso(modalId) {
    cerrarModalGenerico(modalId);
}

// ============================================
// PROTECCIÓN PARA DOCENTES
// ============================================

const DOCENTE_PASSWORD = "ECSAH.ZCAR";
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
    
    // ============================================
    // EVENTOS PARA MODALES
    // ============================================
    
    // Cierre con la X
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const modalId = this.closest('.modal-overlay').id;
            if (modalId === 'modalInfografias') {
                cerrarModal();
            } else {
                cerrarModalProceso(modalId);
            }
        });
    });
    
    // Cierre al hacer clic fuera del modal
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                const modalId = this.id;
                if (modalId === 'modalInfografias') {
                    cerrarModal();
                } else {
                    cerrarModalProceso(modalId);
                }
            }
        });
    });
    
    // Cierre con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalAbierto) {
            const abierto = document.querySelector('.modal-overlay[style*="display: flex"]');
            if (abierto) {
                const modalId = abierto.id;
                if (modalId === 'modalInfografias') {
                    cerrarModal();
                } else {
                    cerrarModalProceso(modalId);
                }
            }
        }
    });
    
    // Acordeón del FUS
    document.querySelectorAll('.fus-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
        });
    });
});
