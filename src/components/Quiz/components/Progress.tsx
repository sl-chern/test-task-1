import { Check, X } from "lucide-react";

export interface ProgressProps {
  questionsCount: number;
  answers: Record<number, boolean>;
}

export const Progress: React.FC<ProgressProps> = ({
  questionsCount,
  answers,
}) => {
  return (
    <div className="flex flex-row gap-2">
      {Array.from({ length: questionsCount }, (_, i) => i).map((item) => (
        <div
          key={`progress${item}`}
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background:
              item + 1 in answers
                ? answers[item + 1]
                  ? "#34d399"
                  : "red"
                : "#d1d5db",
          }}
        >
          {item + 1 in answers ? (
            answers[item + 1] ? (
              <Check className="text-emerald-600" />
            ) : (
              <X className="text-red-800" />
            )
          ) : null}
        </div>
      ))}
    </div>
  );
};
