import Task from './Task.js'

function Tasks({todos, removeTodo}){   
    return(
        <div className = "tasks">
            <h3> Tasks</h3>
            {todos.map((todo) => <Task key={todo.id} todo={todo} removeTodo={removeTodo}/>)}
        </div>
    )
}

export default Tasks;