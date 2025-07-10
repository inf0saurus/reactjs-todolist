import React from 'react'

export default function TodoList() {
    let todos = [
        "Go to the gym",
        "Buy groceries",
        "Read a book"
    ];
  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => (
            <li className='todoItem' key={todoIndex}>{todo}
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
            </li>
        ))}
    </ul>
  )
}
