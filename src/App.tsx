// import { type } from '@testing-library/user-event/dist/type';
// import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';   
import { v1 } from 'uuid';
import './App.css';
import {TaskType, Todolist} from "./components/Todolist"

// import {BrowserRouter, Route} from 'react-router-dom';    
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import state from './redux/state';

// function useState2(data: any ) {
//     return  [data, () => {}];
// } 



  // export function Counter() { 
  //     console.log("Counter")
  //     let arr  = useState(5)    
  //     let data = arr[0] 
  //     let setData = arr[1]

  //     return <div onClick={ () => { setData(data+1) } }>{data}</div>
  //  }   

  export type FilterValuesType = "all" | "completed" | "active";

 function App() { 
    let [filter, setFilter] = useState<FilterValuesType>('active'); 
    
 
    let [tasks, setTasks] = useState< Array<TaskType>>([
       { id: v1(), title: "HTML&CSS", isDone: true} , 
       { id: v1(), title: "JS", isDone: true },  
       { id: v1(), title: " ReactJS", isDone: false },   
       { id: v1(), title: " Redux", isDone: false },   
       { id: v1(), title: " GraphQL", isDone: false },   
    ]);  
    console.log(tasks)
  
   function removeTask(id: string) { 
      let filteredTasks = tasks.filter( t => t.id !== id )  
       setTasks(filteredTasks); 
   }   


   function addTask(title: string) {
       let newTask = { 
        id: v1(), 
        title: title, 
        isDone: false 
    }   
       let newTasks = [newTask, ...tasks];            
       setTasks(newTasks);  
   }

   function changeFilter(value: FilterValuesType) {
    setFilter(value);
   } 

   let tasksForList = tasks; 
   if(filter === "completed") {
       tasksForList = tasks.filter(t => t.isDone === true);
   } 

    if(filter === "active") {
       tasksForList = tasks.filter(t => t.isDone === false);
   } 
   

  return (
      <div className='App'> 
         <Todolist title='What to learn' tasks={tasksForList} removeTask={removeTask} changeFilter={changeFilter} addTask={addTask} />     
      </div> 
  );
} 


export default App;


