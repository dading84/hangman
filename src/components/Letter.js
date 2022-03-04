import { useState } from "react";

function Letter({ char, visible, success }) {
  console.log(success);
  return (
    <span
      className={`letter ${
        success === null ? "" : success ? "success" : "failure"
      }`}
    >
      {visible ? char : "_"}
    </span>
  );
}

export default Letter;
