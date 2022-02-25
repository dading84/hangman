import { useState } from "react";

function Letter({ char, visible }) {
  return <span className="letter">{visible ? char : "_"}</span>;
}

export default Letter;
