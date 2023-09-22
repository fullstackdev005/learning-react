import { useState } from 'react';
import './App.css';
import Job from './components/Job';
function App() {

  const [todoList, settodoList ] = useState([])
  const [newTask, setnewTask] = useState("")

  const handlenewTask = (e) => {
    setnewTask(e.target.value)
  }

  const addTodo = () => {
    const newTodo = [...todoList, newTask]
    settodoList(newTodo)
  }

  return (
    <div>
        <input type='text' onChange={handlenewTask}/>
        <button onClick={addTodo}>Add todo</button>
        <div className='list'>
          {todoList.map((todo, key) => {
            return <h1 key={key}>{todo}</h1>
          })}
        </div>
    </div>
    
  );
}

export default App;
