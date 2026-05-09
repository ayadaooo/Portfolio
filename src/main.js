import './style.css'
import javascriptLogo from './assets/javascript.svg'
import gw2 from './assets/gw2.jpeg'
import heroImg from './assets/hero.png'
import poe from './assets/poe.jpg'
import song from './assets/Downloads.wav'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
    <img src="${gw2}" class="vite" alt="GW2 logo" />
  </div>
  <div>
    <h1>ABOUT ME</h1>
    <h2>Adrian Yadao</h2>
    <p>Hi my name is <code>Adrian</code> and this is a simple <code>about me</code> page!</p>
  </div>
  <button id="counter" type="button" class="counter"></button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
    <h2>Hobbies</h2>
    <p>I love to play guitar and make music!</p>
    <p>It has become a part of my life that I can't imagine not doing.</p>
    <p> I started to play when I was 18 and fell in love ever since.</p>
    <p> Here is a little snippet of what I like to make! </p>
    <audio controls>
      <source src="${song}" type="audio/wav">
      Your browser does not support the audio element.
    </audio>
    <p>I like to play video games! </p>
    <p>My favourite genres are probably MMO'S and ARPG's</p>
    <img class="gw2"src="https://i.postimg.cc/csTCXntt/Wallpaper-08-2560x1440.png" alt="GW2" width="500" height="300">
    <ul>
      <li>
        <a href="https://www.guildwars2.com/en/" target="_blank">
          <img class="logo" src="${gw2}" alt="" />
          GW2
        </a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img class="button-icon" src="${poe}" alt="">
          POE
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>Connect with us</h2>
    <p>Join the Vite community</p>
    <ul>
      <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
      <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
      <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
      <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`

setupCounter(document.querySelector('#counter'))
