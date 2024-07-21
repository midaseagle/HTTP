import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';

const App = () => {
  const [editingTask, setEditingTask] = useState(null);

  const handleTaskAdded = (newTask) => {
    setEditingTask(null); // Reset any editing state
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleTaskUpdated = (updatedTask) => {
    setEditingTask(null); // Reset editing state
  };

  return (
    <div className="App">
      <h1>TODO Application</h1>
      {editingTask ? (
        <EditTask task={editingTask} onTaskUpdated={handleTaskUpdated} onCancel={() => setEditingTask(null)} />
      ) : (
        <AddTask onTaskAdded={handleTaskAdded} />
      )}
      <TaskList onEdit={handleEdit} />
    </div>
  );
};

export default App;
