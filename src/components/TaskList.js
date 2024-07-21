import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = ({ onEdit }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://crudapi.co.uk/api/v1/todo')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://crudapi.co.uk/api/v1/todo/${id}`)
      .then(() => setTasks(tasks.filter(task => task._id !== id)))
      .catch(error => console.error('Error deleting task:', error));
  };

  const handleToggleComplete = (id, isCompleted) => {
    axios.put(`https://crudapi.co.uk/api/v1/todo/${id}`, { isCompleted: !isCompleted })
      .then(response => setTasks(tasks.map(task => task._id === id ? response.data : task)))
      .catch(error => console.error('Error updating task:', error));
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
              {task.name}
            </span>
            <button onClick={() => handleToggleComplete(task._id, task.isCompleted)}>
              {task.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => onEdit(task)}>Edit</button>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
