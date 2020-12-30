const View = require("./ttt-view.js");// require appropriate file
const Game = require("./game.js");// require appropriate file

window.View = View;
  $(() => {
    const game1 = new Game();
    new View(game1, $("figure"));
  });
