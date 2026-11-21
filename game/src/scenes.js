export const SCENES = [
  {
    name: 'Dawn Harbour',
    draw: (ctx) => {
      // Procedural drawing for Dawn Harbour
      ctx.fillStyle = '#ffcc99'; // Morning light
      ctx.fillRect(0, 0, 800, 600);
      ctx.fillStyle = '#663300'; // Dock
      ctx.fillRect(0, 500, 800, 100);
      ctx.fillStyle = '#000066'; // Water
      ctx.fillRect(0, 550, 800, 50);
      // ... Add shapes for differences
    },
    differences: [
      { x: 100, y: 100, r: 20, found: false },
      { x: 200, y: 200, r: 20, found: false },
      { x: 300, y: 300, r: 20, found: false },
      { x: 400, y: 400, r: 20, found: false },
      { x: 500, y: 100, r: 20, found: false },
      { x: 600, y: 200, r: 20, found: false },
      { x: 700, y: 300, r: 20, found: false },
    ]
  },
  {
    name: 'Noon Market Pier',
    draw: (ctx) => {
      ctx.fillStyle = '#ffffcc'; // Noon
      ctx.fillRect(0, 0, 800, 600);
      ctx.fillStyle = '#996633';
      ctx.fillRect(0, 500, 800, 100);
      // ... Add shapes
    },
    differences: [
      { x: 150, y: 150, r: 20, found: false },
      { x: 250, y: 250, r: 20, found: false },
      { x: 350, y: 350, r: 20, found: false },
      { x: 450, y: 450, r: 20, found: false },
      { x: 550, y: 150, r: 20, found: false },
      { x: 650, y: 250, r: 20, found: false },
      { x: 750, y: 350, r: 20, found: false },
    ]
  },
  {
    name: 'Dusk Lighthouse',
    draw: (ctx) => {
      ctx.fillStyle = '#663366'; // Dusk
      ctx.fillRect(0, 0, 800, 600);
      ctx.fillStyle = '#331a00';
      ctx.fillRect(0, 500, 800, 100);
      // ... Add shapes
    },
    differences: [
      { x: 120, y: 120, r: 20, found: false },
      { x: 220, y: 220, r: 20, found: false },
      { x: 320, y: 320, r: 20, found: false },
      { x: 420, y: 420, r: 20, found: false },
      { x: 520, y: 120, r: 20, found: false },
      { x: 620, y: 220, r: 20, found: false },
      { x: 720, y: 320, r: 20, found: false },
    ]
  }
];
