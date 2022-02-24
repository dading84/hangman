import Letter from "./Letter.js";

function Word() {
  const word = "hangman";

  const letters = word.split('')

  return (
    <div id="word">
      {letters.map(letter => {
        return <Letter char={letter} />
      })      
      }
    </div>
  );
}

export default Word;
