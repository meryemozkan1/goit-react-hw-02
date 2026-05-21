import css from "./Feedback.module.css";

export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={css.feedbackList}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p className={css.total}>Total: {totalFeedback}</p>
      <p className={css.positive}>Positive: {positiveFeedback}%</p>
    </div>
  );
}
