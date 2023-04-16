import { createContext, useState, useEffect } from 'react';
import api from '../api/Todos';

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [filteredList, setFilteredList] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await api.get('/get-todo/');
        setData(response.data);
      } catch (err) {
        console.log('error');
      }
    };

    setTimeout(() => {
      fetchdata();
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        isLoading,
        search,
        setSearch,
        searchResult,
        setSearchResult,
        filteredList,
        setFilteredList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
