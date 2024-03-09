"use client"

import { TodoApp } from "@/components/TodoApp";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <TodoApp />
    </main>
  );
}
