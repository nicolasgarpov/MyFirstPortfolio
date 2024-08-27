// Esperar a que las fuentes estén listas
document.fonts.ready.then(() => {
    // Una vez que las fuentes estén listas, elimina la clase hidden
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.classList.remove('hidden');
    }
});

  
