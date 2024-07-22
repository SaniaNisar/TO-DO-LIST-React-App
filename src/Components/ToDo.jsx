import React, { useState } from 'react';

const ToDo = ({ todo, deleteTodo, updateTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);
  const [newSeverity, setNewSeverity] = useState(todo.severity);
  const [newDueDate, setNewDueDate] = useState(todo.dueDate);

  const handleUpdate = (e) => {
    e.preventDefault();
    // Validate required fields
    if (!newTitle || !newDescription || !newSeverity) {
      alert("Please fill in all required fields.");
      return;
    }
    const updatedTodo = {
      ...todo,
      title: newTitle,
      description: newDescription,
      severity: newSeverity,
      dueDate: newDueDate,
    };
    updateTodo(updatedTodo);
    setIsEditing(false);
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleUpdate} className="form-inline">
          <input
            type="text"
            className="form-control mr-2"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Title"
            required
          />
          <input
            type="text"
            className="form-control mr-2"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Description"
            required
          />
          <select
            className="form-control mr-2"
            value={newSeverity}
            onChange={(e) => setNewSeverity(e.target.value)}
            required
          >
            <option value="" disabled>Select Severity</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </select>
          <input
            type="date"
            className="form-control mr-2"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
          <button type="submit" className="btn btn-success">Update</button>
        </form>
      ) : (
        <>
          <span 
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.title}
          </span>
          <div>
            <button 
              className={`btn ${todo.completed ? 'btn-warning' : 'btn-primary'} mr-2`} 
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button className="btn btn-secondary mr-2" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
};

export default ToDo;
