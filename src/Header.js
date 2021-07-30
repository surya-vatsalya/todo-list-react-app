import { useState } from "react";


function Header({addTodo})
{
    const [newTodo, setNewTodo] = useState('')
    const [todoNum, incrementTodoNum] = useState(0)

    function handleChange(event){
        setNewTodo(event.target.value)
    }

    function handleSubmit(){
        addTodo(newTodo, todoNum)
        incrementTodoNum(todoNum+1)
        setNewTodo('')
    }

    return(
        <div className="header">
            <h1> Todo list </h1>
            <input type="text" onChange={handleChange} value={newTodo} className = "inputText"></input>
            <br/>
            <button onClick={handleSubmit}> add Tasks </button>
        </div>
    );
}

export default Header;