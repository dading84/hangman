import Letter from "./Letter.js";

function ChosenLetters({ chosenLetters }) {
  if (chosenLetters.length) {
    let i = 0;
    return (
      <div id="chosen-letters">
        <span>Your guesses:</span>
        <span className="letters">
          {chosenLetters.map((letter) => {
            return <Letter key={i++} char={letter} visible={true} />;
          })}
        </span>
      </div>
    );
  } else return <></>;
}

export default ChosenLetters;
