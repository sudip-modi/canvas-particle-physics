function random() {
  const canvas = document.getElementById("canvas1");

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var particlesArray = [];

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  const mouse = {
    x: undefined,
    y: undefined,
  };

  canvas.addEventListener("click", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(event);
  });

  canvas.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(event);
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.color = get_rand_color();
      this.size = Math.random() * 15 + 1;
      this.speedX = Math.random() * 5 - 1.5;
      this.speedY = Math.random() * 5 - 1.5;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    for (let i = 0; i < 500; i++) {
      particlesArray.push(new Particle());
    }
  }

  init();
  console.log(particlesArray);

  function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
  }
  animate();
  function get_rand_color() {
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while (color.length < 6) {
      color = "0" + color;
    }
    return "#" + color;
  }
}
random();
