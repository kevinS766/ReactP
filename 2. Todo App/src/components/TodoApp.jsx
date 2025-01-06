import { useState } from 'react';
import { TodoForm } from './TodoForm.jsx';
import { TodoList } from './TodoList.jsx';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = (text) => {
    if (text.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text,
      completed: false, 
    };
    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className='bg-slate-800 h-auto min-h-screen space-y-9'>
      <header className='text-6xl text-white flex justify-center font-semibold pt-5' >Mis tareas</header>
      <TodoForm 
        addTask={addTask} 
        taskText={taskText} 
        setTaskText={setTaskText} 
      />
      <TodoList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TodoApp;
