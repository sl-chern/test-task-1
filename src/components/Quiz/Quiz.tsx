"use client";

import { Question as QuestionInterface } from "@/types/Question";
import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Question } from "./components/Question";
import { Progress } from "./components/Progress";

export interface QuizProps {
  questions: Array<QuestionInterface>;
}

export const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});

  const setAnswer = (answer: boolean) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answer,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion in answers) setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion > questions.length)
    return (
      <div className="flex flex-col bg-white rounded px-5 py-7 gap-2 w-[600px]">
        <h2 className="text-emerald-400 font-medium text-lg">Results</h2>
        <hr />
        <p className="mx-auto text-emerald-400 font-semibold text-2xl">
          {Object.entries(answers).filter((answer) => answer[1]).length} /{" "}
          {questions.length}
        </p>
      </div>
    );

  return (
    <div className="flex flex-col bg-white rounded px-5 py-7 gap-2 w-[600px]">
      <h2 className="text-emerald-400 font-medium text-lg">
        Question {currentQuestion} of {questions.length}
      </h2>
      <hr />
      {currentQuestion > questions.length ? (
        <></>
      ) : (
        <Question
          question={questions[currentQuestion - 1]}
          setAnswer={setAnswer}
          answerd={currentQuestion in answers}
        />
      )}
      <Button onClick={nextQuestion}>Next</Button>
      <Progress questionsCount={questions.length} answers={answers} />
    </div>
  );
};
