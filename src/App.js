import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import Header from './Components/Header';
import TODOList from './Components/TODOList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/style.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const toggleComplete = (id) => {
    console.log(`Toggling completion for todo with id: ${id}`);
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };
  

  return (
    <div className="container mt-5">
      <Header />
      <Form addTodo={addTodo} />
      <TODOList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
