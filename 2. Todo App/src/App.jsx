import { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";



function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((t) => t !== taskToDelete));
  };

  return (
    <div className='bg-slate-700 min-h-screen text-white font-semibold flex flex-col items-center space-y-9 p-4'>
      <header className="text-6xl">Mi Todo List</header>
      <div className='flex space-x-2'>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Añadir tarea"
        className='bg-slate-900 text-white p-2 rounded max-w-md w-[600px]'
      />
      <button 
      onClick={handleAddTask}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        <IoMdAddCircleOutline className='text-2xl'/>
      </button>
      </div>
      <ul className='p-4 rounded w-[600px]'>
        {tasks.map((task, index) => (
          <li key={index} 
          className='flex justify-between items-center p-2 bg-slate-800 rounded my-2 w-full'>
            {task}
            <button 
            onClick={() => handleDeleteTask(task)}
            className='bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>
              <FaTimes/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
