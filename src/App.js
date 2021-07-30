import Header from './Header.js'
import Tasks from './Tasks.js'
import { useState } from 'react';


function App() {

  const [todos, setTodos] = useState([]);
  
  
  function addTodo(newTodo, todoNum){
    setTodos(todos => [...todos, {text:newTodo, id: todoNum}])
  }

  function removeTodo(removedTodo){
    setTodos(todos.filter(todo => todo.id !== removedTodo.id))
  }

  return (
    <div className="App">
        <Header addTodo = {addTodo}/>
        <Tasks todos={todos} removeTodo = {removeTodo}/>
    </div>
  );
}

export default App;
