const BACKGROUND = "#101010";
const FOREGROUND = "#50FF50";

console.log(game)
game.width = 800;
game.height = 800;

const ctx = game.getContext("2d");
console.log(ctx);

function clear() {
   ctx.fillStyle = BACKGROUND;
   ctx.fillRect(0, 0, game.width, game.height)
}

function point({ x, y }) {
   const s = 20;
   ctx.fillStyle = FOREGROUND;
   ctx.fillRect(x, y, s, s);
}

function screen(p) {
   // -1...1 => 0...w/h
   return {
      x: (p.x + 1) / 2 * game.width,
      y: (p.y + 1) / 2 * game.height
   }
}

clear()
point(screen({ x: 0, y: 0 }));
