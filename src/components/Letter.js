function Letter({ char, visible, success }) {
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
