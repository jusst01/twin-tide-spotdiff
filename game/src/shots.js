
export function stageShot(name, game) {
  if (name === 'start') {
    // Already at start state, no changes needed
  } else if (name === 'play') {
    // Stage mid-game: find 2 differences
    game.setFound(2);
    // Mark first 2 as found
    game.scene.differences[0].found = true;
    game.scene.differences[1].found = true;
  } else if (name === 'end') {
    // Stage win state: all differences found
    game.setFound(7);
    game.scene.differences.forEach(d => d.found = true);
    game.setGameOver(true);
  }
}
