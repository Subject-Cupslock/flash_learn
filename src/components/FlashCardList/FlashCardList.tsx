import React from "react";
import flashCardData from "@/data/flashCardsData";
import { FlashCard } from "../FlashCard/FlashCard";

export const FlashCardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {flashCardData.map((d) => (
        <FlashCard key={d.id} question={d.question} answer={d.answer} />
      ))}
    </div>
  );
};
