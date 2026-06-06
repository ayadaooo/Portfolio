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
    setTimeout(type, 100);
  } else {
    nameElement.classList.add("done");
    type2();
  }
}

type();

const titleElement = document.querySelector("#title");
const title = "Software Developer";
let index2 = 0;

function type2() {
  titleElement.classList.add("typing");
  if (index2 < title.length) {
    titleElement.textContent += title[index2];
    index2++;
    setTimeout(type2, 80);
  } else {
    titleElement.classList.add("done");
  }
}

const canvas = document.querySelector("#particles");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const particles = [];

const createParticle = () => {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speedX: Math.random() - 0.5,
    speedY: Math.random() - 0.5,
  };
};

for (let i = 0; i < 80; i++) {
  particles.push(createParticle());
}

const drawParticle = (particle) => {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255, 166, 0, 0.5)";
  ctx.fill();
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;
    drawParticle(particle);
  });

  requestAnimationFrame(animate);
};

animate();
