import { useState } from "react";

function Form({ chosenLetters, setChosenLetters }) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    console.log(input);
    event.preventDefault();
    if (!input) return;
    setChosenLetters((currLetters) => {
      return [input, ...currLetters];
    });
    setInput("");
  };

  const validateChar = (event) => {
    setInput(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      Enter a letter and click Try:
      <input type="text" value={input} onChange={validateChar} maxLength="1" />
      <button>Try</button>
    </form>
  );
}

export default Form;
