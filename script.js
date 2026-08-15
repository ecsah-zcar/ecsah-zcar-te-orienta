// ============================================
// ECSAH ZCAR Te Orienta - Micrositio
// ============================================

// 📚 CONTENIDO ESTUDIANTES (igual que antes, no lo repito para ahorrar espacio)
// ... (aquí va el array contenidoEstudiantes completo)

// ============================================
// CONTENIDO PARA MODALES DE PROCESOS (CORREGIDO)
// ============================================

const contenidoHomologaciones = [
    // ... (tus 9 objetos, asegúrate de que cada uno tenga coma)
];

const contenidoAplazamientos = [
    // ... (tus 3 objetos)
];

// ============================================
// FUNCIONES COMUNES
// ============================================

function crearTarjeta(item) {
    // ... (la misma función que ya tenías)
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
    // ... (igual)
}

// ============================================
// FUNCIONES DEL MODAL (Infografías)
// ============================================

function abrirModal(enlaces, titulo) {
    const overlay = document.getElementById('modalInfografias');
    const grid = document.getElementById('modalGrid');
    const titleEl = document.getElementById('modalTitle');
    
    if (!overlay || !grid) return;
    
    // Evita abrir si ya está visible
    if (overlay.style.display === 'flex') return;
    
    titleEl.innerText = `📘 ${titulo}`;
    grid.innerHTML = '';  // Limpia el grid antes de llenarlo
    
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
    
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    const overlay = document.getElementById('modalInfografias');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ============================================
// FUNCIONES PARA MODALES DE PROCESOS
// ============================================

function abrirModalProceso(modalId) {
    const overlay = document.getElementById(modalId);
    if (!overlay) return;
    
    // Evita abrir si ya está visible
    if (overlay.style.display === 'flex') return;
    
    // Si es el modal FUS, ya tiene contenido estático
    if (modalId === 'modalFUS') {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        return;
    }
    
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Llenar el grid solo si está vacío
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

function cerrarModalProceso(modalId) {
    const overlay = document.getElementById(modalId);
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ============================================
// PROTECCIÓN PARA DOCENTES
// ============================================

// ... (igual que antes, no lo cambio)

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    renderizarGrid(allEstudiantes, 'gridEstudiantes');
    initTabs();
    // ... (el resto de la inicialización)
    
    // ============================================
    // EVENTOS PARA MODALES (CORREGIDOS)
    // ============================================
    
    // Modal de infografías
    const modalOverlay = document.getElementById('modalInfografias');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) cerrarModal();
        });
        if (modalCloseBtn) modalCloseBtn.addEventListener('click', cerrarModal);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') cerrarModal();
        });
    }
    
    // Modales de procesos (usamos event delegation para evitar duplicados)
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.removeEventListener('click', cerrarModalProceso); // Limpia eventos previos
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            cerrarModalProceso(modalId);
        });
    });
    
    // Cierre al hacer clic fuera
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.removeEventListener('click', cerrarModalProceso);
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
    
    // Acordeón del FUS
    document.querySelectorAll('.fus-btn').forEach(btn => {
        btn.removeEventListener('click', toggleFusPanel);
        btn.addEventListener('click', toggleFusPanel);
    });
});

function toggleFusPanel() {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        panel.style.display = 'block';
    }
}
