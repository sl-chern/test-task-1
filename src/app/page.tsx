import { Quiz } from "@/components/Quiz/Quiz";
import Image from "next/image";
import * as questionsJson from "@/data/questions.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-emerald-400">
      <Quiz questions={questionsJson.questions} />
    </main>
  );
}
