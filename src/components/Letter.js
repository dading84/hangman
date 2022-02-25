import { useState } from "react";

function Letter({ char, visible, success }) {
  return (
    <span className={`letter ${success ? "success" : "failure"}`}>
      {visible ? char : "_"}
    </span>
  );
}

export default Letter;
