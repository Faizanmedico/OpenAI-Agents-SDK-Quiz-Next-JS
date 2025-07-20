'use client';
import Quiz from "@/components/Quiz";
import { useState } from "react";

export default function QuizPage() {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <main className={`${dark ? "dark" : ""} min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">OpenAI Agents SDK Quiz</h1>
          <button
            onClick={() => setDark(!dark)}
            className="bg-gray-800 text-white dark:bg-white dark:text-black px-4 py-1 rounded"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
        <Quiz />
      </main>
    </div>
  );
}