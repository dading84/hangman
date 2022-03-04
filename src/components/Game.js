import { useState, useEffect } from "react";
import Word from "./Word.js";
import Hangman from "./Hangman.js";
import Form from "./Form.js";
import ChosenLetters from "./ChosenLetters.js";
import EndMessage from "./EndMessage.js";

function Game() {
  const [word, setWord] = useState("");
  const [chosenLetters, setChosenLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [endMessage, setEndMessage] = useState("");
  const [running, setRunning] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [haveWon, setHaveWon] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("words.txt")
      .then((response) => response.text())
      .then((data) => {
        const words = data.split("\n");
        setWord(words[Math.floor(Math.random() * words.length)]);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading ...</p>;

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
        setHaveWon={setHaveWon}
      />
    );
  } else {
    userInput = <EndMessage endMessage={endMessage} haveWon={haveWon} />;
  }

  return (
    <div id="game">
      <Word
        word={word}
        chosenLetters={chosenLetters}
        running={running}
        haveWon={haveWon}
      />
      <Hangman score={score} />
      {userInput}
      <ChosenLetters chosenLetters={chosenLetters} word={word} />
    </div>
  );
}

export default Game;
