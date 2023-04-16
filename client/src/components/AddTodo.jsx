import React, { useContext, useState } from 'react';
import './AddTodo.scss';
import { IoMdAdd } from 'react-icons/io';
import DataContext from '../context/DataContext';

import api from '../api/Todos';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const { data, setData } = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!todo) return;
    const newTodo = { task: todo };

    try {
      const resposne = await api.post('/add-todo/', newTodo);
      const allTodos = [...data, resposne.data];
      setData(allTodos);
      setTodo('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="AddTodo">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Add Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button>
            <IoMdAdd />
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddTodo;
