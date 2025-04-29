import { v4 as uuidv4 } from 'uuid';
import {useState} from "react";
export default function TotoList(){
    let[todos,setTodos]=useState([{task:"Sample task",id:uuidv4(),isDone:false}]);
    let[newtodo,setNewtodo]=useState([""]);

    let addNewTask=()=>{
        setTodos((prevalue)=>{
            return[...prevalue,{task:newtodo,id:uuidv4(),isDone:false}]
        });
        setNewtodo("");
    }
    let newTodoList=(event)=>{
        setNewtodo(event.target.value)
    }
    let deleteTodo=(id)=>{
        setTodos((prevTodo)=>todos.filter((prevTodo)=>prevTodo.id!=id));
    }
    let upperCaseAll=()=>{
        setTodos(todos.map((todos)=>{
            return {...todos,isDone:true}
        }))
    }
    let markAsDone = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isDone:true};
            } else {
                return todo;
            }
        }));
    };
    
    return(
        <div>
            <input placeholder="add a task" value={newtodo} onChange={newTodoList}></input>
            <br/>
            <button onClick={addNewTask}>Add Task</button>
            <br/> <br/>
            <hr/>

            <h3>Tasks</h3>
            <ul>
                {
               todos.map((el)=>(
              <li key={el.id}>
              <span style={el.isDone ? {textDecorationLine: "line-through" }:{}}>{el.task}</span>
              &nbsp; &nbsp;
              <button onClick={()=>deleteTodo(el.id)}>delete</button>
              <button onClick={() => markAsDone(el.id)}>Mark As Done</button>

              </li>
               ))
                }
            </ul>
            <button style={todos.isDone ? {textDecorationLine: "line-through" }:{}} onClick={upperCaseAll}>UppercaseAll</button>
           
        </div>
    )
}