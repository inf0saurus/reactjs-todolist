import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList() {
    let todos = [
        "Go to the gym",
        "Buy groceries",
        "Read a book"
    ];
  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => (
            <TodoCard key={todoIndex}>
                <p>{todo}</p>
            </TodoCard>
        ))}
    </ul>
  )
}
