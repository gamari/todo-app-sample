"use client";

import React, { useState } from "react";

export const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleOnClick = () => {
    const newTodos = [...todos, { title: "test1" }];
    setTodos(newTodos);
  };

  return (
    <div className="border p-6 rounded-lg h-[400px] w-[360px]">
      <div className="font-bold text-xl mb-3">TODOアプリ</div>
      <div>
        <input
          type="text"
          placeholder="TODOを入力"
          className="border outline-none p-2 rounded-md"
        />
        <button className="p-2 bg-teal-500 text-white" onClick={handleOnClick}>
          追加
        </button>
      </div>

      <div>
        {todos.map((todo, index) => (
          <div>{todo.title}</div>
        ))}
      </div>
      <div>{/* 検索欄 */}</div>
    </div>
  );
};
