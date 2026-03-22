/* =============================================
   LALA BIRTHDAY WEBSITE — script.js
   ============================================= */

/* ---- CURSOR ---- */
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

/* =============================================
   OPENING SCREEN
   ============================================= */
(function buildOpeningParticles() {
  const starsEl  = document.getElementById('openingStars');
  const colors   = ['#7986cb','#f48fb1','#fff','#80deea','#ffd54f','#ce93d8'];
  const hearts   = ['💙','💗','💜','🩵','✨'];

  // stars
  for (let i = 0; i < 120; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const sz = Math.random() * 5 + 1;
    s.style.cssText = `
      width:${sz}px; height:${sz}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      left:${Math.random()*100}%; top:${Math.random()*100}%;
      --dur:${(Math.random()*3+1.5).toFixed(2)}s;
    `;
    starsEl.appendChild(s);
  }

  // floating hearts on opening
  for (let i = 0; i < 18; i++) {
    const h = document.createElement('div');
    h.className = 'float-heart-open';
    h.textContent = hearts[Math.floor(Math.random()*hearts.length)];
    h.style.cssText = `
      --fs:${(Math.random()*18+10).toFixed(0)}px;
      --dur:${(Math.random()*6+5).toFixed(2)}s;
      --left:${(Math.random()*100).toFixed(1)}%;
      --delay:${(Math.random()*5).toFixed(2)}s;
    `;
    starsEl.appendChild(h);
  }
})();

/* =============================================
   OPEN SURPRISE
   ============================================= */
function openSurprise() {
  document.getElementById('opening').classList.add('hide');
  const main = document.getElementById('main');
  main.classList.add('show');
  document.body.style.cursor = 'none';

  buildFloatingHearts();
  buildConfetti('confetti1');
  buildConfetti('confetti2');
  buildConcertLights();
  buildLightsticks();
  buildLoveBg();
  buildSparkleRow();
  initReveal();
  initNavDots();

  setTimeout(startMusic, 600);
}

/* =============================================
   FLOATING HEARTS (persistent)
   ============================================= */
function buildFloatingHearts() {
  const layer = document.getElementById('heartLayer');
  const items = ['💙','💗','💜','🩵','💕','✨','⭐'];
  for (let i = 0; i < 32; i++) {
    const h = document.createElement('div');
    h.className = 'fheart';
    h.textContent = items[Math.floor(Math.random()*items.length)];
    h.style.cssText = `
      --fs:${(Math.random()*22+9).toFixed(0)}px;
      --left:${(Math.random()*100).toFixed(1)}%;
      --dur:${(Math.random()*8+6).toFixed(2)}s;
      --delay:${(Math.random()*8).toFixed(2)}s;
    `;
    layer.appendChild(h);
  }
}

/* =============================================
   CONFETTI
   ============================================= */
function buildConfetti(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const colors = ['#f48fb1','#7986cb','#80deea','#ffd54f','#fff','#ce93d8','#a5d6a7'];
  for (let i = 0; i < 55; i++) {
    const c = document.createElement('div');
    c.className = 'conf';
    c.style.cssText = `
      --w:${(Math.random()*8+3).toFixed(0)}px;
      --h:${(Math.random()*8+3).toFixed(0)}px;
      --c:${colors[Math.floor(Math.random()*colors.length)]};
      --l:${(Math.random()*100).toFixed(1)}%;
      --br:${Math.random()>.5?'50%':'2px'};
      --dur:${(Math.random()*4+3).toFixed(2)}s;
      --delay:${(Math.random()*5).toFixed(2)}s;
    `;
    el.appendChild(c);
  }
}

/* =============================================
   CONCERT LIGHTS
   ============================================= */
function buildConcertLights() {
  const el = document.getElementById('concertLights');
  const colors = ['#7986cb','#f48fb1','#80deea','#ffd54f','#ce93d8'];
  for (let i = 0; i < 9; i++) {
    const s = document.createElement('div');
    s.className = 'spotlight';
    s.style.cssText = `
      left:${8+i*10}%;
      --c:${colors[Math.floor(Math.random()*colors.length)]};
      --dur:${(Math.random()*2+2).toFixed(2)}s;
      --from:${(Math.random()*30-60).toFixed(1)}deg;
      --to:${(Math.random()*30+10).toFixed(1)}deg;
      --delay:${(Math.random()*2).toFixed(2)}s;
    `;
    el.appendChild(s);
  }
}

/* =============================================
   LIGHTSTICKS
   ============================================= */
function buildLightsticks() {
  const el = document.getElementById('lightsticks');
  const colors = ['#7986cb','#f48fb1','#80deea','#ffd54f','#ce93d8','#4fc3f7','#ef9a9a'];
  for (let i = 0; i < 9; i++) {
    const c = colors[Math.floor(Math.random()*colors.length)];
    const ls = document.createElement('div');
    ls.className = 'lightstick';
    ls.style.cssText = `--dur:${(.7+Math.random()*.8).toFixed(2)}s; --delay:${(i*.1).toFixed(2)}s;`;
    ls.innerHTML = `
      <div class="ls-head" style="--c:${c}; --delay:${(i*.12).toFixed(2)}s;"></div>
      <div class="ls-body"></div>
    `;
    el.appendChild(ls);
  }
}

/* =============================================
   LOVE BG
   ============================================= */
function buildLoveBg() {
  const el = document.getElementById('loveBg');
  const items = ['💙','💗','💜','🩵','💕','✨','⭐','🌟','💫'];
  for (let i = 0; i < 28; i++) {
    const l = document.createElement('div');
    l.className = 'big-love';
    l.textContent = items[Math.floor(Math.random()*items.length)];
    l.style.cssText = `
      --fs:${(Math.random()*55+14).toFixed(0)}px;
      --l:${(Math.random()*100).toFixed(1)}%;
      --t:${(Math.random()*100).toFixed(1)}%;
      --dur:${(Math.random()*4+2).toFixed(2)}s;
      --delay:${(Math.random()*4).toFixed(2)}s;
    `;
    el.appendChild(l);
  }
}

/* =============================================
   SPARKLE ROW
   ============================================= */
function buildSparkleRow() {
  const el = document.getElementById('sparkleRow');
  const items = ['💙','💗','✨','🌟','💫','💜','🩵','⭐','💕'];
  items.forEach((item, i) => {
    const s = document.createElement('div');
    s.className = 'sp-item';
    s.textContent = item;
    s.style.cssText = `--dur:${(Math.random()*1.5+1).toFixed(2)}s; --delay:${(i*.14).toFixed(2)}s;`;
    el.appendChild(s);
  });
}

/* =============================================
   SCROLL REVEAL
   ============================================= */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* =============================================
   NAV DOTS
   ============================================= */
function initNavDots() {
  const sectionIds = ['birthday','message','kpop','love-section','ending'];
  const dots = document.querySelectorAll('.nav-dot');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const idx = sectionIds.indexOf(e.target.id);
        if (idx !== -1) {
          dots.forEach(d => d.classList.remove('active'));
          dots[idx].classList.add('active');
        }
      }
    });
  }, { threshold: 0.45 });

  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });
}

function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior:'smooth' });
}

/* =============================================
   MUSIC (Web Audio API — Happy Birthday melody)
   ============================================= */
let audioCtx = null;
let musicState = 'stopped'; // 'playing' | 'paused' | 'stopped'
let loopTimeout = null;

const HB_NOTES = [
  261.63,261.63,293.66,261.63,349.23,329.63,
  261.63,261.63,293.66,261.63,392.00,349.23,
  261.63,261.63,523.25,440.00,349.23,329.63,293.66,
  466.16,466.16,440.00,349.23,392.00,349.23
];
const HB_DURS = [
  .4,.15,.55,.55,.55,1.1,
  .4,.15,.55,.55,.55,1.1,
  .4,.15,.55,.55,.55,.55,1.1,
  .4,.15,.55,.55,.55,1.5
];
const TOTAL_DUR = HB_DURS.reduce((a,b)=>a+b,0);

function scheduleNotes(startTime) {
  let t = startTime;
  HB_NOTES.forEach((freq, i) => {
    const osc  = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(.28, t + .02);
    gain.gain.exponentialRampToValueAtTime(.001, t + HB_DURS[i] - .04);
    osc.start(t);
    osc.stop(t + HB_DURS[i]);
    t += HB_DURS[i];
  });
}

function startMusic() {
  if (musicState === 'playing') return;
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const now = audioCtx.currentTime + .1;
  scheduleNotes(now);
  musicState = 'playing';
  updateMusicBtn();
  // loop
  function loop() {
    if (musicState !== 'playing') return;
    scheduleNotes(audioCtx.currentTime + .1);
    loopTimeout = setTimeout(loop, TOTAL_DUR * 1000 - 200);
  }
  loopTimeout = setTimeout(loop, TOTAL_DUR * 1000 - 200);
}

function toggleMusic() {
  if (musicState === 'playing') {
    audioCtx.suspend();
    clearTimeout(loopTimeout);
    musicState = 'paused';
  } else {
    startMusic();
  }
  updateMusicBtn();
}

function updateMusicBtn() {
  const btn = document.getElementById('musicBtn');
  if (musicState === 'playing') {
    btn.textContent = '⏸';
    btn.classList.add('playing');
  } else {
    btn.textContent = '▶';
    btn.classList.remove('playing');
  }
}
