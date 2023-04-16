import { React, useEffect, useContext } from 'react';
import DataContext from '../context/DataContext';
import './Search.scss';
const Search = () => {
  const {
    data,
    search,
    setSearch,
    setSearchResult,
    filteredList,
    setFilteredList,
  } = useContext(DataContext);

  useEffect(() => {
    const todos = data.filter((todo) =>
      todo.task.toLowerCase().startsWith(search.toLocaleLowerCase())
    );
    setSearchResult(todos);
  }, [search]);

  useEffect(() => {
    switch (filteredList) {
      case 'completed':
        setSearchResult(data.filter((todo) => todo.completed));
        setSearch('');
        break;
      case 'uncompleted':
        setSearchResult(data.filter((todo) => !todo.completed));
        setSearch('');
        break;
      default:
        setSearchResult(data);
        setSearch('');
        break;
    }
  }, [filteredList, data]);

  return (
    <div className="Search">
      <form>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select onChange={(e) => setFilteredList(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Un Completed</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Search;
