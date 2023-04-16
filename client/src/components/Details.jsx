import { React, useContext } from 'react';
import DataContext from '../context/DataContext';
import './Details.scss';
const Details = () => {
  const { data } = useContext(DataContext);
  return (
    <div className="Details">
      <ul>
        <li>
          Totol <span>{data.length}</span>
        </li>
        <li>
          Completed <span>{data.filter((todo) => todo.completed).length}</span>
        </li>
        <li>
          Uncompleted{' '}
          <span>{data.filter((todo) => !todo.completed).length}</span>
        </li>
      </ul>
    </div>
  );
};

export default Details;
