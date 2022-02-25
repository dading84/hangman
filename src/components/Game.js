import Word from "./Word.js";
import Hangman from "./Hangman.js";
import Form from "./Form.js";
import ChosenLetters from "./ChosenLetters.js";

function Game() {
  return (
    <div id="game">
      <Word />
      <Hangman />
      <Form />
      <ChosenLetters />
    </div>
  );
}

export default Game;
