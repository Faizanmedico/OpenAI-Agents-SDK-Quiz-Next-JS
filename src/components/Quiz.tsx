// ✅ Step 3: components/Quiz.tsx (Quiz logic and UI)
'use client';
import { useState } from "react";
import { openAIAgentsQuestions as questions, QuizQuestion } from "@/lib/questions";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const q: QuizQuestion = questions[current];

  const handleSelect = (option: string) => {
    setSelected(option);
    setShowExplanation(true);
    if (option === q.answer) setScore(score + 1);
  };

  const next = () => {
    setSelected(null);
    setShowExplanation(false);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      alert(`Quiz Finished! Your score: ${score}/${questions.length}`);
      setCurrent(0);
      setScore(0);
    }
  };

  return (
    <div className="bg-white rounded shadow p-6 max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-3">Q{q.id}. {q.question}</h2>
      <ul className="space-y-2">
        {q.options.map((opt) => (
          <li key={opt}>
            <button
              className={`w-full p-2 rounded border text-left ${
                selected
                  ? opt === q.answer
                    ? "bg-green-200 border-green-500"
                    : opt === selected
                    ? "bg-red-200 border-red-500"
                    : "bg-gray-100"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => handleSelect(opt)}
              disabled={!!selected}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>

      {showExplanation && (
        <div className="mt-4 p-4 bg-gray-50 border-l-4 border-blue-400">
          ✅ <strong>Answer:</strong> {q.answer}
          <p className="mt-2 text-sm text-gray-700">{q.explanation}</p>
          <button
            onClick={next}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
