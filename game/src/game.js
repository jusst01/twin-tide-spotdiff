import { SCENES } from './scenes.js';

export function createGame() {
  let currentSceneIndex = 0;
  let found = 0;
  let misses = 0;
  let timer = 0;
  let gameOver = false;

  return {
    setFound(n) { found = n; },
    setGameOver(val) { gameOver = val; },
    get scene() { return SCENES[currentSceneIndex]; },
    get state() {
      return {
        scene: SCENES[currentSceneIndex],
        found,
        misses,
        timer,
        totalDifferences: 7,
        gameOver: gameOver
      };
    },
    checkDifference(x, y) {
      const scene = SCENES[currentSceneIndex];
      const foundIdx = scene.differences.findIndex(d => {
        const dx = d.x - x;
        const dy = d.y - y;
        return Math.sqrt(dx * dx + dy * dy) < d.r;
      });

      if (foundIdx !== -1) {
        scene.differences.splice(foundIdx, 1);
        found++;
        if (found === 7) {
            currentSceneIndex++;
            found = 0;
        }
        return true;
      } else {
        misses++;
        return false;
      }
    },
    update(dt) {
      timer += dt;
    }
  };
}
