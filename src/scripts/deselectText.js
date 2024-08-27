// Añade un evento de doble clic al <body>
document.body.addEventListener('click', function(event) {
    // Obtiene la selección actual
    let selection = window.getSelection();
    
    // Verifica si el evento se originó en un botón o un enlace
    let targetElement = event.target;
    let isButtonOrLink = targetElement.tagName === 'BUTTON' || targetElement.tagName === 'A';
    
    // Si el doble clic no se originó en un botón o un enlace, deselecciona el texto
    if (!isButtonOrLink) {
        selection.removeAllRanges();
    }
});



