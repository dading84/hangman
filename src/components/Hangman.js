function Hangman({ score, losingScore }) {
  return (
    <div id="hangman">
      <img
        src={`./images/${score}.png`}
        alt={`You have used ${score} lives out of ${losingScore}`}
      />
    </div>
  );
}

export default Hangman;
