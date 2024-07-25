import { Question as QuestionInterface } from "@/types/Question";
import { Answer } from "./Answer";

export interface QuestionProps {
  question: QuestionInterface;
  setAnswer: (answer: boolean) => void;
  answerd: boolean;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  setAnswer,
  answerd,
}) => {
  return (
    <>
      <p className="text-xl">{question.question}</p>
      <div className="flex flex-col gap-2">
        {question.answers.map((item, index) => (
          <Answer
            text={item.text}
            isCorrect={item.isCorrect}
            key={`answer${index}`}
            setAnswer={setAnswer}
            clicked={answerd}
          />
        ))}
      </div>
    </>
  );
};
