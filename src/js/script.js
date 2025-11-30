function verProyecto(id) {
    // Oculta la grilla de tarjetas
    document.querySelector('.portfolio-grid').classList.add('hidden');

    // Oculta todos los proyectos
    document.querySelectorAll('.project-container').forEach(proj => {
        proj.classList.add('hidden');
    });

    // Muestra el proyecto elegido
    document.querySelector(id).classList.remove('hidden');

    // Scroll suave
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}

function volverAlPortfolio() {
    // Oculta todos los proyectos
    document.querySelectorAll('.project-container').forEach(proj => {
        proj.classList.add('hidden');
    });

    // Muestra la grilla de tarjetas
    document.querySelector('.portfolio-grid').classList.remove('hidden');

    // Scroll arriba de la sección portafolio
    document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
}
