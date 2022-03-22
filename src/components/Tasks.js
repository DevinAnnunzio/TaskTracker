import React from 'react';
//for state inside of a func, we use useState
// import { useState } from 'react';
//create a list using map for the data
import Task from './Task';
const Tasks = ({tasks, onDelete, onToggle}) => {
    // //state is immutable, you recreate it and send it down
    // const[tasks, setTasks] = useState([
    //     {id: 1, text: "Doctors appointment", day:"February 1", reminder:true},
    //     {id: 2, text: "Food appointment", day:"November 1", reminder:false},
    //     {id: 3, text: "Eye appointment", day:"March 1", reminder:true},
    //     {id: 4, text: "Gym appointment", day:"April 1", reminder:false}
    // ])

  return (
    // setTasks([...tasks, {id:4, text: "Nothing", day:"January 1", reminder: false}])
  <>
  {/* what does id represent here? */}
  {tasks.map((task) => (<Task key = {task.id} task = {task} onDelete = {onDelete} onToggle = {onToggle}/> ) )}
  </>
  );
};

export default Tasks;
