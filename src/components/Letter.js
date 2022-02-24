import { useState } from 'react';

function Letter(props) {

  const [visible, setVisible] = useState(false);

  console.log(visible)

  return <span className="letter">{visible ? props.char : '_'}</span>;
}

export default Letter;
