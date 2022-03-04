function EndMessage({ endMessage, haveWon }) {
  if (endMessage) {
    return (
      <div id="end-message" className={haveWon ? "success" : "failure"}>
        {endMessage}! ... <a href="index.html">Start again &gt;&gt;</a>
      </div>
    );
  } else {
    return <></>;
  }
}

export default EndMessage;
