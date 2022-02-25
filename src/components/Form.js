import { useState } from "react";

function Form({ chosenLetters, setChosenLetters }) {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input) return;
    setChosenLetters((currLetters) => {
      return [input, ...currLetters];
    });
    setInput("");
  };

  const validateChar = ({ target }) => {
    if (!chosenLetters.includes(target.value) && /^[a-z]$/.test(target.value)) {
      setInput(target.value);
      setMsg("");
    } else {
      setMsg("You have entered an invalid entry, please enter a unique letter");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      Enter a letter and click Try:
      <input type="text" value={input} onChange={validateChar} maxLength="1" />
      <button>Try</button>
      <div id="form-msg">{msg}</div>
    </form>
  );
}

export default Form;
