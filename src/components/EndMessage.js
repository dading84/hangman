function EndMessage({ endMessage }) {
  if (endMessage) {
    return (
      <div id="end-message">
        {endMessage}! ... <a href="index.html">Start again&gt;&gt;</a>
      </div>
    );
  } else {
    return <></>;
  }
}

export default EndMessage;
