import { createGame } from './game.js';
import { stageShot } from './shots.js';

const params = new URLSearchParams(window.location.search);
const shot = params.get('shot');

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const game = createGame();

function render() {
  const state = game.state;
  // Clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw Scene
  state.scene.draw(ctx);

  // Draw HUD
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText(`Scene: ${state.scene.name}`, 10, 30);
  ctx.fillText(`Differences Left: ${state.totalDifferences - state.found}`, 10, 60);
  ctx.fillText(`Found: ${state.found}`, 10, 90);
  ctx.fillText(`Misses: ${state.misses}`, 10, 120);
  ctx.fillText(`Timer: ${Math.floor(state.timer)}`, 10, 150);

  if (!shot) requestAnimationFrame(render);
  else window.__shotReady = true;
}

if (!shot) {
    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      game.checkDifference(x, y);
    });

    requestAnimationFrame(render);
    let lastTime = performance.now();
    function loop(now) {
        const dt = (now - lastTime) / 1000;
        lastTime = now;
        game.update(dt);
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
} else {
    stageShot(shot, game);
    render();
}
