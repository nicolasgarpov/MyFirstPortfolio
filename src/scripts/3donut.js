import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = null; // Fondo de la escena transparente

// Configuración de la cámara
const aspectRatio = 1; // Proporción de aspecto 1:1
const camera = new THREE.PerspectiveCamera(48, aspectRatio, 0.1, 300);
camera.position.z = 80; // Acercar la cámara

// Configuración del renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(200, 200); // Ajustar el tamaño del canvas a 200x200 píxeles
document.querySelector('.div-3d').appendChild(renderer.domElement); // Añade el canvas al div-3d

// Luz ambiental para iluminación uniforme
const ambientLight = new THREE.AmbientLight(0x0000ff, 0.3);
scene.add(ambientLight);

// Luz direccional principal para sombras
const light = new THREE.DirectionalLight(0xffffff, 7);
light.position.set(5, 10, 7);
scene.add(light);

// Luz direccional secundaria con intensidad más baja
const lightSecondary = new THREE.DirectionalLight(0xffffff, 5);
lightSecondary.position.set(-5, -50, 3);
scene.add(lightSecondary);

// Geometría del toroide (forma de dona)
const torusGeometry = new THREE.TorusGeometry(10, 6, 20, 35);

// Material de vidrio para el toroide
const material = new THREE.MeshPhysicalMaterial({
  color: 0xffffff, // Color blanco
  transparent: true, // Material transparente
  transmission: 1, // Controla la transmisión de luz
  roughness: 0.07, // Rugosidad baja
  clearcoat: 1, // Agrega una capa de recubrimiento
  ior: 2.333, // Índice de refracción alto
  envMapIntensity: 1.5, // Intensidad del mapa de entorno
  thickness: 1.5, // Espesor para simular vidrio
  depthWrite: true,
  opacity: 0.4, // Transparencia
});

// Crear el mesh del toroide con el material
const torus = new THREE.Mesh(torusGeometry, material);
scene.add(torus);

// Añadir niebla a la escena
scene.fog = new THREE.Fog(0xffffff, 120, 120);

// Variables para manejar el mouse
const mouse = new THREE.Vector2();
const targetRotation = new THREE.Vector2();

// Evento de mousemove en el canvas del renderer
renderer.domElement.addEventListener(
  "mousemove",
  (event) => {
    // Actualizar la posición del mouse normalizada
    mouse.x =
      (event.clientX - renderer.domElement.getBoundingClientRect().left) /
      renderer.domElement.clientWidth *
      2 -
      1;
    mouse.y =
      -(
        event.clientY - renderer.domElement.getBoundingClientRect().top
      ) /
      renderer.domElement.clientHeight *
      2 +
      1;

    // Calcular la rotación objetivo basada en el movimiento del mouse
    targetRotation.y = mouse.x * Math.PI * 2;
    targetRotation.x = mouse.y * Math.PI;
  },
  false
);

// Animación general
function animate() {
  requestAnimationFrame(animate);

  // Interpolar la rotación del toroide hacia la rotación objetivo
  torus.rotation.x += (targetRotation.x - torus.rotation.x) * 0.02;
  torus.rotation.y += (targetRotation.y - torus.rotation.y) * 0.02;

  // Añadir rotación constante al toroide
  torus.rotation.y += 0.005;

  renderer.render(scene, camera);
}

// Inicia la animación
animate();