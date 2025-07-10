import { useState } from 'react';

export default function TodoInput(props) {
  const { handleAddTodos } = props;
    const [todoValue, setTodoValue] = useState('');

  return (
    <header>
        <input type="text" value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value);
        }} placeholder="Add a new todo..." />
        <button onClick={() => {
            handleAddTodos(todoValue);
        }}>Add</button>
    </header>
  );
}