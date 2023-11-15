import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import React, {useState} from 'react';

function App() {
  
  const [list, setList] = useState([
    {label: 'Fazer o tema', checked: false}
  ]);

  const handleAddButton = () => { 
    if(itemInput.trim() === '') return;
    setList([...list, {label: itemInput, checked: false}])
  }

  const deleteItem = (index) => {
    setList(list.filter((index, key) => key !== index));    
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do List</h1>
      <h2>This is a to-do list for you to keep track of your tasks or whatever you want.</h2>
      </header>
        <ul>
          {list.map(item => (
            <li>{item.label}<button onClick={() => deleeteItem(index)}></button></li>
          ))}
        </ul>
    </div>
  );
}

export default App;
