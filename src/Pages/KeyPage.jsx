import '../App.css'
import { v4 as uuid } from 'uuid';

const todos=[
    {task: "mow the yard", id: uuid()},
    {task: "Work on odin projects", id:uuid()},
    {task: "feed the cat", id:uuid()}  
];

function ToDoList(){
    return (
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    )
}

export default ToDoList
