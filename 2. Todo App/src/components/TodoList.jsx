import React from 'react';
import { FaTimes } from "react-icons/fa";
import { TbChecks } from "react-icons/tb";


export const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul className='flex justify-center' >
      {tasks.map(task => (
        <li key={task.id}
        className='flex items-center justify-between  w-[550px] bg-slate-700 text-white rounded pl-2 
        font-semibold h-10'>
          <span 
            onClick={() => toggleTask(task.id)} 
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
          </span>
          <div className=''>
          <button
              onClick={() => toggleTask(task.id)}
              className={`px-2 py-2 rounded-md transition-colors duration-300 ${
                task.completed
                  ? "bg-gray-500 hover:bg-gray-600"
                  : "bg-green-500 hover:bg-green-700"
              }`}
            >
              {task.completed ? <TbChecks/> : <TbChecks/>}
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="px-2 py-2 rounded-md bg-red-500 hover:bg-red-700 text-white transition-colors duration-300"
            >
              <FaTimes/>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
