import { Answer } from "./Answer";

export interface Question {
  question: string;
  answers: Array<Answer>;
}
