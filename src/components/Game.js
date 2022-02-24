import Word from "./Word.js";
import Hangman from "./Hangman.js";

function Game() {
  return (
    <div id="game">
      <Word />
      <Hangman />
    </div>
  );
}

export default Game;
