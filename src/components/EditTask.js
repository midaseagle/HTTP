import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditTask = ({ task, onTaskUpdated, onCancel }) => {
  const [name, setName] = useState(task.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://crudapi.co.uk/api/v1/todo/${task._id}`, { name, isCompleted: task.isCompleted })
      .then(response => {
        onTaskUpdated(response.data);
        onCancel();
      })
      .catch(error => console.error('Error updating task:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Update Task</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditTask;
