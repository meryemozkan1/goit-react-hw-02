import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div className={css.btnWrapper}>
      {/* Parametreli fonksiyon çalıştırırken onClick={() => func(arg)} kalıbı kullanılır */}
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>

      {/* Adım 4: Eğer en az 1 feedback varsa Reset butonu görünür */}
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={css.resetBtn}>
          Reset
        </button>
      )}
    </div>
  );
}
