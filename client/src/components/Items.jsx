import { React, useContext, useState } from 'react';
import './Items.scss';
import { IoMdTrash } from 'react-icons/io';
import { motion } from 'framer-motion';
import api from '../api/Todos';
import DataContext from '../context/DataContext';

const Items = ({ todo }) => {
  const [isDelete, setIsDelete] = useState(false);
  const { data, setData } = useContext(DataContext);

  const handleCheck = async (id) => {
    const myTodo = data.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    const updated = data.find((t) => t.id === id);

    try {
      await api.put(`/update-todo/${id}/`, {
        ...updated,
        completed: !updated.completed,
      });

      setData(myTodo);
    } catch (error) {
      console.log(error);
    }
  };

  const hanldeDelete = async (id) => {
    setIsDelete(true);
    try {
      await api.delete(`/delete-todo/${id}/`);
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      const todo = data.filter((t) => t.id !== id);
      setData(todo);
      setIsDelete(false);
    }, 1000);
  };

  return (
    <motion.li
      animate={{
        opacity: isDelete ? 0 : 1,
        scale: isDelete ? 0.2 : 1,
      }}
      initial={{
        opacity: 0,
        scale: 0.2,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
      }}
      className="Items"
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleCheck(todo.id)}
      />
      <span
        style={todo.completed ? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => handleCheck(todo.id)}
      >
        {todo.task}
      </span>
      <button onClick={() => hanldeDelete(todo.id)}>
        <IoMdTrash />
      </button>
    </motion.li>
  );
};

export default Items;
