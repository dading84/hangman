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
  const [running, setRunning] = useState(true);

  let userInput;
  if (running) {
    userInput = (
      <Form
        chosenLetters={chosenLetters}
        setChosenLetters={setChosenLetters}
        setScore={setScore}
        word={word}
        setEndMessage={setEndMessage}
        setRunning={setRunning}
      />
    );
  } else {
    userInput = <EndMessage endMessage={endMessage} />;
  }

  return (
    <div id="game">
      <Word word={word} chosenLetters={chosenLetters} />
      <Hangman score={score} />
      {userInput}
      <ChosenLetters chosenLetters={chosenLetters} />
    </div>
  );
}

export default Game;
