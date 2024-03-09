"use client";

import React, { useState } from "react";

// type interface
// Microsoft => intarface
interface Todo {
  title: string;
  completed: boolean;
}

export const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    const newTodos: Todo[] = [...todos, { title: title, completed: false }];
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos: Todo[] = todos.filter((todo, i) => {
      return i !== index;
    });
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
          onChange={(e) => {
            const value = e.target.value;
            setTitle(value);
          }}
        />
        <button className="p-2 bg-teal-500 text-white" onClick={addTodo}>
          追加
        </button>
      </div>

      <div className="mt-3">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between"
          >
            <div>
              <input type="checkbox" name="" id="" />
            </div>
            <div>{todo.title}</div>
            <div>
              <button
                className="bg-red-500 text-white p-2"
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                削除
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>{/* 検索欄 */}</div>
    </div>
  );
};
