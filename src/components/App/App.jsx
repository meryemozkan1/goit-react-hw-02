import { useState, useEffect } from "react";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import css from "./App.module.css";

export default function App() {
  // Adım 6: İlk açılışta localStorage okuması yapıyoruz. Veri yoksa sıfır değerlerle başlar.
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  // Adım 6: Feedback state'i her değiştiğinde local storage güncellenir.
  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  // Adım 2: Durumu güncelleyen fonksiyon
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  // Adım 4: Geri bildirimleri sıfırlayan fonksiyon
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // Adım 3 & Adım 5: Türetilmiş durumlar (Derived State)
  // Bunlar için ekstra useState kullanmıyoruz, mevcut state üzerinden anlık hesaplanıyor.
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className={css.container}>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>

      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />

      {/* Adım 3: Koşullu Render (Conditional Rendering) */}
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}
