import React from 'react';
import ToDo from './ToDo';

const TODOList = ({ todos, deleteTodo, updateTodo, toggleComplete }) => {
  return (
    <ul className="list-group">
      {todos.map(todo => (
        <ToDo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default TODOList;
