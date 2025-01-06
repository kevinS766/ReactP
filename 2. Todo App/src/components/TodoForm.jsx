import React from 'react';
import { IoIosAdd } from "react-icons/io";


export const TodoForm = ({ addTask, taskText, setTaskText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText);
  };

  return (
    <form onSubmit={handleSubmit} className='flex justify-center space-x-2 h-10'>
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
        placeholder="Agregar nueva tarea"
        className='bg-slate-900 text-white p-2 rounded max-w-md w-[600px]'
      />
      <button 
      type="submit"
      className='bg-slate-600 text-white p-2 rounded'> <IoIosAdd className='text-2xl'/> </button>
    </form>
  );
};
