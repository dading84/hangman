import Letter from "./Letter.js";

function Word({ word, chosenLetters }) {
  const letters = word.split("");
  let i = 0;
  return (
    <div id="word">
      {letters.map((letter) => {
        return (
          <Letter
            key={i++}
            char={letter}
            visible={chosenLetters.includes(letter)}
          />
        );
      })}
    </div>
  );
}

export default Word;
