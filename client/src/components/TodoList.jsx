import React from 'react';
import Items from './Items';
import './TodoList.scss';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
const TodoList = () => {
  const { searchResult, isLoading } = useContext(DataContext);
  return (
    <div className="TodoList">
      {isLoading && <p>Loading...</p>}
      {!searchResult.length && !isLoading ? (
        <p>Empty list</p>
      ) : (
        <ul>
          {searchResult.map((todo) => {
            return <Items key={todo.id} todo={todo} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
