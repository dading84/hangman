import { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      Enter a letter and click Try:
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        maxLength="1"
      />
      <button>Try</button>
    </form>
  );
}

export default Form;
