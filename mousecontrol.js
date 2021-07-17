function mousecontrol() {
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
    init();
  });

  canvas.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    init();
  });

  class Particle {
    constructor() {
      this.x = mouse.x;
      this.y = mouse.y;
      this.color = get_random_color();
      this.size = Math.random() * 20 + 1;
      this.speedX = Math.random() * 10 - 1.5;
      this.speedY = Math.random() * 10 - 1.5;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
    draw() {
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  function init() {
    for (let i = 0; i < Math.random() * 10 + 5; i++) {
      particlesArray.push(new Particle());
    }
  }

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

  function get_random_color() {
    var color = "";
    for (var i = 0; i < 3; i++) {
      var sub = Math.floor(Math.random() * 256).toString(16);
      color += sub.length == 1 ? "0" + sub : sub;
    }
    return "#" + color;
  }

  function get_rand_color() {
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while (color.length < 6) {
      color = "0" + color;
    }
    return "#" + color;
  }
}
mousecontrol();
