import React, { useState } from 'react';
import axios from 'axios';

const AddTask = ({ onTaskAdded }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://crudapi.co.uk/api/v1/todo', { name, isCompleted: false })
      .then(response => {
        onTaskAdded(response.data);
        setName('');
      })
      .catch(error => console.error('Error adding task:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
