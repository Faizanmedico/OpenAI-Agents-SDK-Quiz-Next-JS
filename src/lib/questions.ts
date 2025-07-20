// ✅ Step 4: lib/questions.ts (Question type + list of quiz questions)
export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export const openAIAgentsQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the OpenAI Agents SDK used for?",
    options: [
      "Image generation",
      "Building AI agents that can use tools and perform actions",
      "Game development",
      "Speech synthesis"
    ],
    answer: "Building AI agents that can use tools and perform actions",
    explanation: "The SDK is designed for tool-using AI agents, not image or speech tasks."
  },
  {
    id: 2,
    question: "Which method runs the agent in a loop until the task is done?",
    options: ["agent.run_forever()", "agent.invoke()", "runner.run()", "agent.execute()"],
    answer: "runner.run()",
    explanation: "`runner.run()` executes the goal-to-tools loop."
  }
];




