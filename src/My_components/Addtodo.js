import React from 'react'
import  { useState } from 'react';


export const Addtodo = ({addTodo}) => {

  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");

  const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("title or description can't be Blank");
    }
    else{
    addTodo(title,desc);
    setTitle("");
    setDesc("");
  }
}


    return (
        <div className="container">
            <h2 className=" my-3">Add A Todo</h2>
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title :</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title"  />
 
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description :</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}className="form-control" id="desc" />
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Submit</button>
</form>
            
        </div>
    )
}

