import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      const newTodo = {
        id: Date.now(),
        title,
        description,
        severity,
        dueDate,
        completed: false,
      };
      addTodo(newTodo);
      setTitle("");
      setDescription("");
      setSeverity("");
      setDueDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline mb-4">
      <input
        type="text"
        className="form-control mr-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        className="form-control mr-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <select
        className="form-control mr-2"
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
        required
      >
        <option value="" disabled>
          Severity
        </option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Urgent">Urgent</option>
      </select>
      <input
        type="date"
        className="form-control mr-2"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default Form;
