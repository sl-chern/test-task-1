import { useEffect, useState } from "react";

export interface AnswerProps {
  text: string;
  isCorrect: boolean;
  setAnswer: (answer: boolean) => void;
  clicked: boolean;
}

export const Answer: React.FC<AnswerProps> = ({
  text,
  isCorrect,
  setAnswer,
  clicked,
}) => {
  const [bgColor, setBgColor] = useState("#d1d5db");

  const handleClick = () => {
    if (clicked) return;
    if (isCorrect) setBgColor("#34d399");
    else setBgColor("red");
    setAnswer(isCorrect);
  };

  useEffect(() => {
    setBgColor("#d1d5db");
  }, [text]);

  return (
    <div
      className="p-2 bg-gray-300 cursor-pointer rounded-sm"
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}
    >
      <p className="text-black">{text}</p>
    </div>
  );
};
