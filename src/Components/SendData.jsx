import React, { useState } from 'react'
import ToDo from './ToDo';
import AddTasks from './AddTasks';

export default function SendData() {

  const [todoItem,addToDo]= useState([]);
  const childCall =(e) =>{
    addToDo([...todoItem,e])
  }
  return (
    <>
    <AddTasks send={childCall}/>
    <ToDo tasks = {todoItem} />
    </>

  )
}
