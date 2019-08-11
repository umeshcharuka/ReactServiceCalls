import React from 'react';

const Todos =({todos,deleteT})=>{

const todoList=todos.length  ? 
(
    todos.map(tt=>
        {        
    return <div key={tt.id} >{
        tt.name
    }<button onClick={()=>{deleteT(tt.id)}}>delete</button></div>
        }
))
:
(
  <div>No data to display
  </div>   
)
    return <div>
       {todoList}

    </div>
}


export default Todos;