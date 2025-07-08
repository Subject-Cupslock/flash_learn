import React from "react";

interface ControlButtonProps {
  type: "default" | "secondary";
  text: string;
  func: () => void;
  condition?: boolean;
}

export const ControlButton: React.FC<ControlButtonProps> = ({
  type,
  text,
  func,
  condition,
}) => {
  return type === "default" ? (
    <button
      onClick={func}
      className="px-6 py-2 rounded-full bg-black text-white font-semibold transition-all duration-300 ease-in-out 
            shadow-md hover:-translate-y-1 hover:shadow-lg active:scale-95 active:shadow-inner 
            "
    >
      {text}
    </button>
  ) : (
    <button
      onClick={func}
      disabled={condition}
      className={`px-6 py-2 rounded-full text-gray-900 font-semibold transition-all duration-300 ease-in-out 
            shadow-md hover:-translate-y-1 hover:shadow-lg active:scale-95 active:shadow-inner 
            ${condition ? "opacity-40 cursor-not-allowed" : ""}`}
    >
      {text}
    </button>
  );
};
