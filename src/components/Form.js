import { useState } from "react";

function Form({
  chosenLetters,
  setChosenLetters,
  setScore,
  word,
  setEndMessage,
  setRunning,
}) {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input) return;
    setChosenLetters((currLetters) => {
      const newLetters = [...currLetters, input];
      const win = word.split("").every((letter) => {
        return newLetters.includes(letter);
      });
      if (win) {
        setRunning(false);
        setEndMessage("You have won");
      }
      return newLetters;
    });
    setScore((score) => {
      if (!word.split("").includes(input)) score++;
      if (score === 5) {
        setRunning(false);
        setEndMessage("You have lost");
      }
      return score;
    });
    setInput("");
  };

  const validateChar = (event) => {
    const value = event.target.value;
    if (
      (!chosenLetters.includes(value) && /^[a-z]$/.test(value)) ||
      value === ""
    ) {
      setInput(value);
      setMsg("");
    } else {
      setMsg("You have entered an invalid entry, please enter a unique letter");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      Enter a letter and click 'Try':
      <input type="text" value={input} onChange={validateChar} maxLength="1" />
      <button>Try</button>
      <div id="form-msg">{msg}</div>
    </form>
  );
}

export default Form;