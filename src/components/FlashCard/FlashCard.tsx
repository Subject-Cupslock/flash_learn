"use client";
import React, { useState } from "react";
import "./FlashCard.css";

export const FlashCard = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="card-container mb-5"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
        <div className="card-face card-front drop-shadow-2xl bg-[#f1f0f0] absolute">
          Вопрос: {question}
        </div>

        <div className="card-face card-back drop-shadow-2xl  bg-[#f1f0f0] absolute">
          Ответ: {answer}
        </div>
      </div>
    </div>
  );
};
