import { useState } from "react";
import Word from "./Word.js";
import Hangman from "./Hangman.js";
import Form from "./Form.js";
import ChosenLetters from "./ChosenLetters.js";
import EndMessage from "./EndMessage.js";

function Game() {
  const word = "hangman";
  const [chosenLetters, setChosenLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [endMessage, setEndMessage] = useState("");
  return (
    <div id="game">
      <Word word={word} chosenLetters={chosenLetters} />
      <Hangman score={score} />
      <ChosenLetters chosenLetters={chosenLetters} />
      <Form
        chosenLetters={chosenLetters}
        setChosenLetters={setChosenLetters}
        setScore={setScore}
        word={word}
        setEndMessage={setEndMessage}
      />
      <EndMessage endMessage={endMessage} />
    </div>
  );
}

export default Game;
