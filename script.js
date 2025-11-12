const messages = [
  "hi i guess",
  "hope u find this funny?"
];

const toast = document.getElementById('toast');
const loveBtn = document.getElementById('loveBtn');
const musicBtn = document.getElementById('musicBtn');
const song = document.getElementById('song');

function showToast(text) {
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function spawnHeart(x, y) {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.textContent = ['💖','💗','💞','💕'][Math.floor(Math.random()*5)];
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  heart.style.fontSize = (16 + Math.random()*18) + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3500);
}

loveBtn.addEventListener('click', (e) => {
  showToast(messages[Math.floor(Math.random()*messages.length)]);
  spawnHeart(e.clientX, e.clientY);
});

musicBtn.addEventListener('click', async () => {
  if (song.paused) {
    await song.play();
    musicBtn.textContent = '⏸️ Musik pausieren';
  } else {
    song.pause();
    musicBtn.textContent = '▶️ Musik starten';
  }
});
