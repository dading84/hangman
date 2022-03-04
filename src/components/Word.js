import Letter from "./Letter.js";

function Word({ word, chosenLetters, running, haveWon }) {
  const letters = word.split("");
  let i = 0;
  return (
    <div id="word">
      {letters.map((letter) => {
        return (
          <Letter
            key={i++}
            char={letter}
            visible={chosenLetters.includes(letter) || !running}
            success={haveWon}
          />
        );
      })}
    </div>
  );
}

export default Word;
