import "./style.css";

window.scrollTo(0, 0);

const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.33 },
);

faders.forEach(function (fader) {
  observer.observe(fader);
});

const nameElement = document.querySelector("#name");
const name = "Adrian Yadao";
let index = 0;

function type() {
  if (index < name.length) {
    nameElement.textContent += name[index];
    index++;
    setTimeout(type, 120);
  } else {
    nameElement.classList.add("done");
    type2();
  }
}

const titleElement = document.querySelector("#title");
const title = "Software Developer";
let index2 = 0;

function type2() {
  titleElement.classList.add("typing");
  if (index2 < title.length) {
    titleElement.textContent += title[index2];
    index2++;
    setTimeout(type2, 100);
  } else {
    titleElement.classList.add("done");
  }
}

const canvas = document.querySelector("#particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.documentElement.scrollHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];

const createParticle = () => {
  const speedX = (Math.random() - 0.5) * 0.1;
  const speedY = Math.random() * 0.2 + 0.3;
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 1.5 + 0.5,
    speedX,
    speedY,
    originalSpeedX: speedX,
    originalSpeedY: speedY,
  };
};
for (let i = 0; i < 300; i++) {
  particles.push(createParticle());
}

const drawParticle = (particle) => {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  ctx.fillStyle = "rgb(200, 225, 255)";
  ctx.fill();
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.y > canvas.height) {
      particle.y = 0;
      particle.x = Math.random() * canvas.width;
    }

    if (particle.x > canvas.width) {
      particle.x = 0;
    }

    if (particle.x < 0) {
      particle.x = canvas.width;
    }
    const dx = mouse.x - particle.x;
    const dy = mouse.y - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 100) {
      const force = (100 - distance) / 100;
      particle.x -= (dx / distance) * force * 2;
      particle.y -= (dy / distance) * force * 2;
    } else {
      particle.speedX = particle.originalSpeedX;
      particle.speedY = particle.originalSpeedY;
    }
    drawParticle(particle);
  });

  requestAnimationFrame(animate);
};

const mouse = { x: 0, y: 0 };

const cursor = document.createElement("div");
cursor.id = "cursor";
document.body.appendChild(cursor);

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY + window.scrollY;
  mouse.x = e.clientX;
  mouse.y = e.clientY + window.scrollY;
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
animate();

const introElement = document.querySelector("#intro-text");
const introText = "LET YOUR LIGHT BURN BRIGHT";
let index3 = 0;

function type3() {
  if (index3 < introText.length) {
    introElement.textContent += introText[index3];
    index3++;
    setTimeout(type3, 120);
  } else {
    setTimeout(() => {
      const intro = document.querySelector("#intro");
      intro.style.opacity = "0";

      setTimeout(() => {
        type();
      }, 300);

      setTimeout(() => {
        intro.style.display = "none";
      }, 600);
    }, 300);
  }
}

type3();

type3();
