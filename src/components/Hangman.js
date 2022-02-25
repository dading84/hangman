function Hangman({ score }) {
  return (
    <div id="hangman">
      <img src={`./images/${score}.png`} />
    </div>
  );
}

export default Hangman;
