const game = require("./game.js");

class View {
  constructor(game, $el) {
    this.game = game,
    this.$el = $el;

    this.setupBoard();
    this.bindEvents()
  }

  bindEvents() {
    $("ul").on("click",e =>{
      this.makeMove($(e.target));
    })
  }

  makeMove($square) {
    debugger
    this.game.playMove($square.data('pos'));
    $square.addClass(this.game.currentPlayer);

    if (this.game.isOver()) {
      // cleanup click handlers.
      this.$el.off("click");
      this.$el.addClass("game-over");

      const winner = this.game.currentPlayer;
      const $figcaption = $("<figcaption>");

      if (winner) {
        this.$el.addClass(`winner-${this.game.currentPlayer}`);
        $figcaption.html(`You win, ${this.game.currentPlayer}!`);
      } else {
        $figcaption.html("It's a draw!");
      }

      this.$el.append($figcaption);
    }
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("grid");
    // const $el = $("figure");
    // $el.append($ul);
    this.$el.append($ul)
    for (let j = 0; j < 3; j++){
      for (let k = 0; k < 3; k++){
        const $li = $("<li>");
        $li.data('pos', [j, k] );
        $ul.append($($li));
      };
    };

  }
}

module.exports = View;
