import { useState } from "react";
import Word from "./Word.js";
import Hangman from "./Hangman.js";
import Form from "./Form.js";
import ChosenLetters from "./ChosenLetters.js";

function Game() {
  const [chosenLetters, setChosenLetters] = useState([]);
  //const [score, setScore] = useState([]);
  return (
    <div id="game">
      <Word />
      <Hangman />
      <Form chosenLetters={chosenLetters} setChosenLetters={setChosenLetters} />
      <ChosenLetters chosenLetters={chosenLetters} />
    </div>
  );
}

export default Game;
