'use client';

import { useEffect, useState } from 'react';

interface Todo {
  id: number;
  content: string;
  done: boolean;
}

export default function HomePage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  async function fetchTodos() {
    const res = await fetch('/api/todo/all');
    const data = await res.json();
    setTodos(data.todos);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  async function addTodo() {
    await fetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({ content: text }),
      headers: { 'Content-Type': 'application/json' },
    });
    setText('');
    fetchTodos();
  }

  async function deleteTodo(id: number) {
    await fetch('/api/todo/delete', {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' },
    });
    fetchTodos();
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>My TODO List</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            {todo.content}
            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
