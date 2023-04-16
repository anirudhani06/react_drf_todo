import './App.scss';
import AddTodo from './components/AddTodo';
import Details from './components/Details';
import Header from './components/Header';
import Search from './components/Search';
import TodoList from './components/TodoList';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <div className="Todo">
        <Header />
        <DataProvider>
          <AddTodo />
          <Search />
          <Details />
          <TodoList />
        </DataProvider>
      </div>
    </div>
  );
}

export default App;
