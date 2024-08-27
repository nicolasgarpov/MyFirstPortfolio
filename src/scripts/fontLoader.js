// fontLoader.js
(function() {
    function loadFonts() {
      const fontLink = document.createElement('link');
      fontLink.href = 'src/fonts'; // Reemplaza con la URL de tus fuentes
      fontLink.rel = 'stylesheet';
      document.head.appendChild(fontLink);
  
      fontLink.onload = function() {
        document.documentElement.classList.add('fonts-loaded');
        document.getElementById('main-content').classList.remove('hidden');
      };
  
      fontLink.onerror = function() {
        console.error('Error al cargar las fuentes');
        document.getElementById('main-content').classList.remove('hidden');
      };
    }
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadFonts);
    } else {
      loadFonts();
    }
  })();

  
