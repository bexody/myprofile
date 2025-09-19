// Inicializa Particles.js para el fondo animado
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 150, // Aumentamos la cantidad de partículas
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#8a2be2"  /* Morado brillante para las partículas */
    },
    "shape": {
      "type": "circle", // Usamos partículas en forma de círculo
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,  // Opacidad ligeramente visible
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1.5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,  // Tamaño de las partículas
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#8a2be2", /* Morado brillante para las líneas de conexión */
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": true,
      "straight": false,
