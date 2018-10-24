particlesJS("particleContainer", {
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 200
      }
    },
    "color": {
      "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 15
      }
    },
    "opacity": {
      "value": 0.75,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1.5,
        "opacity_min": 0.35,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2.5,
        "size_min": 0.15,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 200,
      "color": "#33b1f8",
      "opacity": 0.5,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "retina_detect": true
});