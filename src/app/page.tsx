// ✅ Step 1: app/page.tsx (Home page with Start Quiz button)

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the GIAIC Quiz!</h1>
      <p className="mb-6 text-gray-700">Test your knowledge of the OpenAI Agents SDK</p>
      <Link href="/quiz">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Start Quiz
        </button>
      </Link>
    </main>
  );
}
