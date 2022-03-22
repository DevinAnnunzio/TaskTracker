import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from 'react';
import AddTask from "./components/AddTask";
//create a list using map for the data


function App() {

  const [showAddTask, setShowAddTask] = useState(false);
  //state is immutable, you recreate it and send it down
  //state should be at the top level so we can use in other components
  //If it is in a lower component, can only be used in the components children
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //fetch tasks
  const fetchTasks = async() => {
    const response = await fetch("http://localhost:5000/tasks")
    const data = await response.json()
    console.log(data);

    return data;
  }
  
  //add task
  const addTask = async (task) => {
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify(task) 
    })

    const data = await response.json();
    setTasks([...tasks, data]);
    // console.log(task)
    //Create a special id for a task
    // const id = Math.floor(Math.random() * 10_000) + 1

    //create a new task with the id and incoming task info
    // const newTask = {id, ...task}
    // console.log(newTask)
    //add new task to tasks list
    // setTasks([...tasks, newTask])
  }

  //delete a task
  const deleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'DELETE'
    })

    setTasks(tasks.filter((task) => (task.id !== id)))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      {/* set value opposite of what it is(!) */}
      <Header showAdd = {showAddTask} onAdd ={() => setShowAddTask(!showAddTask)} title="Hello from App" />
      {/* ternary without else is && */}
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {/* //pass tasks in as a prop into Tasks component*/}
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : "No tasks to show"}
    </div>
  );
}

//rafce for auto fill boiler plate code

export default App;
