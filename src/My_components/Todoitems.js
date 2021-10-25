import React from 'react'

export const Todoitems = ({todo,onDelete}) => {
    return (
        <div className="container my-3 mx-4">
            <h4>{todo.srno}.{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-outline-danger my-1" onClick={onDelete} ><b>Delete</b></button>
            <hr />


            
        </div>
    )
}

 