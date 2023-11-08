window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game = new Game();

    game.start();
  }
  function handleKeydown(e) {
    const key = e.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];
    if (possibleKeystrokes.includes(key)) {
      e.preventDefault();

      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
      }
    }
    window.addEventListener("keyup", (e) => {
      switch (e.code) {
        case "ArrowRight":
        case "ArrowLeft":
        case "ArrowUp":
        case "ArrowDown":
          game.player.directionX = 0;
          game.player.directionY = 0;
          break;
        default:
      }
    });
  }

  window.addEventListener("keydown", handleKeydown);

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function restartGame() {
    location.reload();
  }
};
