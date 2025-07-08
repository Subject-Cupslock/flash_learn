"use client";
import { useState } from "react";
import flashCardData from "@/data/flashCardsData";
import { FlashCard } from "../FlashCard/FlashCard";
import Link from "next/link";
import { ControlButton } from "../UI/ControlButton/ControlButton";

export const FlashCardTrainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = flashCardData.length;

  const goToNext = () => {
    if (currentIndex < totalCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const restart = () => setCurrentIndex(0);

  const isFinished = currentIndex >= totalCards;

  if (isFinished) {
    return (
      <div className="flex flex-col items-center mt-10">
        <p className="text-xl font-semibold text-gray-800 mb-2">Поздравляем</p>
        <p className="text-gray-500 mb-6">Вы прошли все карточки</p>

        <ControlButton type="default" text="Пройти снова" func={restart} />
        <Link
          key="Home"
          href="/"
          className="px-6 py-2 rounded-full text-gray-900 font-semibold transition-all duration-300 ease-in-out 
            shadow-md hover:-translate-y-1 hover:shadow-lg active:scale-95 active:shadow-inner"
        >
          Вернуться на главную
        </Link>
      </div>
    );
  }

  const currentCard = flashCardData[currentIndex];

  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-sm text-gray-500 mb-2">
        Карточка: {currentIndex + 1} из {totalCards}
      </p>

      <FlashCard question={currentCard.question} answer={currentCard.answer} />

      <div className="w-full max-w-xs mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-black rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
        />
      </div>

      <div className="flex w-[320px] justify-between mt-8">
        <ControlButton
          type="secondary"
          text="Предыдущая"
          func={goToPrev}
          condition={currentIndex === 0}
        />
        <ControlButton
          type="default"
          text={currentIndex === totalCards - 1 ? "Звершить" : "Следующая"}
          func={goToNext}
        />
      </div>
    </div>
  );
};
