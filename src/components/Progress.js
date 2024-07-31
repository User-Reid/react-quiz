import { useQuestions } from "../contexts/QuestionContext";

function Progress() {
  const { index, numQuestions, points, answer, maxPossiblePoints } =
    useQuestions();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question{" "}
        <strong>
          {index + 1} / {numQuestions}
        </strong>
      </p>

      <p>
        <strong>
          {points} / {maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
