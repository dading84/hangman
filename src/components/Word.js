import Letter from "./Letter.js";

function Word() {
  const word = "hangman";
  const letters = word.split("");
  let i = 0;

  return (
    <div id="word">
      {letters.map((letter) => {
        return <Letter key={i++} char={letter} />;
      })}
    </div>
  );
}

export default Word;
