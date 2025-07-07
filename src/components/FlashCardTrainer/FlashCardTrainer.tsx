import React, { useState } from "react";
import flashCardData from "@/data/flashCardsData";
import { FlashCard } from "../FlashCard/FlashCard";
export const FlashCardTrainer = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const currentCard = flashCardData[currentIndex];
  const totalCards = flashCardData.length;

  const goToNext = () => {
    if (currentIndex < flashCardData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrew = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-sm text-gray-500 mb-2">
        Карточка: {currentIndex + 1} из {totalCards}
      </p>
      <FlashCard
        key={currentCard.id}
        question={currentCard.question}
        answer={currentCard.answer}
      />
      <div className="w-full mt-4 h-1 bg-gray-200 rounded-full">
        <div
          className="h-full bg-black rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
        />
      </div>

      <div className="flex w-[320px] justify-between mt-8">
        <button
          className="cursor-pointer px-6 py-2 rounded-full  text-gray-900 font-semibold shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg active:scale-95 active:shadow-inner"
          onClick={goToPrew}
        >
          Предыдущая
        </button>
        <button
          className="cursor-pointer px-6 py-2 rounded-full bg-black text-white font-semibold shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg active:scale-95 active:shadow-inner"
          onClick={goToNext}
        >
          Следующая
        </button>
      </div>
    </div>
  );
};
