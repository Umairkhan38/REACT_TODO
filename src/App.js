import React from "react";
import Header from "./My_components/Header";
import {Todos} from "./My_components/Todos";
import Footer from "./My_components/Footer";
import  { useState,useEffect } from 'react';
import {Addtodo} from "./My_components/Addtodo";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {About} from "./My_components/About";


function App() {
  let inittodo;
  if(localStorage.getItem("todos")===null){
    inittodo=[];
    }
    else{
      inittodo=JSON.parse(localStorage.getItem("todos"));
    }

const onDelete= (todo)=>{

  console.log("im deleting this",todo);
  settodos(todos.filter( (e)=>{
    return e!==todo;
  
  
}))
localStorage.setItem("todos",JSON.stringify(todos));

}

const addTodo=(title,desc)=>{
  console.log("im adding ",title,desc);
  let srno;

if(todos.length===0){  
  srno=1;
}else{
 srno=todos[todos.length-1].srno + 1;
}
 const myTodo={
  srno:srno,
  title:title,
  desc:desc
}

settodos([...todos,myTodo]);


}
const [todos, settodos] = useState(inittodo);
useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos));
  },
   [todos])

  
  return (
    <Router>
    <div className="App">
    <Header title="MYTODO'S.COM" />
    <Switch>
    <Route exact path="/" render={()=>{
    return(
    <>
    <Addtodo addTodo={addTodo} />
    <Todos  todos={todos} onDelete={onDelete} />
    </>
    )}
}>

</Route>
  
<Route excact path="/about">
<About />
</Route>
</Switch>

<Footer /> 
    </div>
    </Router>
  );
}

export default App;







