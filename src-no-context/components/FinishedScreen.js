function FinishedScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "💯";
  if (percentage >= 90 && percentage < 100) emoji = "😁";
  if (percentage >= 80 && percentage < 90) emoji = "😅";
  if (percentage >= 70 && percentage < 80) emoji = "😥";
  if (percentage >= 60 && percentage < 70) emoji = "😔";
  if (percentage < 60) emoji = "💀";

  return (
    <>
      <p className="result">
        {" "}
        {emoji} You scored {points} out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
