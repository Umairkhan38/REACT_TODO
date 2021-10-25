import React from 'react';
import  {Todoitems}  from './Todoitems';
import "./Todos.css";

export const Todos = (props) => {
    return (
        <div className="container">
           <h2 className='my-4'>Todo's List</h2>
          {props.todos.length===0? <h5> <span className="badge bg-danger">No Todos Are Here To Display !</span></h5>: 

         props.todos.map((todo)=>{
             return( 
            <Todoitems todo={todo} key={todo.srno} onDelete={()=>{props.onDelete(todo)}}/>
         )})}   
         </div>
    )
}
















