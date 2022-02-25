import { useState } from "react";

function Letter({ char, startVisible = false }) {
  const [visible, setVisible] = useState(startVisible);

  return <span className="letter">{visible ? char : "_"}</span>;
}

export default Letter;
