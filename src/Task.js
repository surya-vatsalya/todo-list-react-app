
function Task({todo, removeTodo}){

    function handleClick(){
        removeTodo(todo)
    }

    return(
        <div className="task">
            <p> {todo.text} </p>
            <button onClick = {handleClick}> delete </button>
        </div>
    )
}

export default Task;