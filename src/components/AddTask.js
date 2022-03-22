import React from 'react';
//each input is going to have it's own component state not app level
import {useState} from 'react';


const AddTask = ({onAdd}) => {
    let [text, setText] = useState("");
    let[day, setDay] = useState("")
    let[reminder, setReminder] = useState(false)

    const onSubmit = (eventObj) => {
        //So it doesn't submit to a page
        eventObj.preventDefault();
    
        if(!text){
            alert('Please add a task');
            return;
        }
        onAdd({text, day, reminder});

        //clear form
        setText('');
        setDay('');
        setReminder = false;

    }
  return (
  <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
          <label>Task</label>
          {/* //e.target.value is whatever is typed in */}
          <input type = "text" placeholder='Add a task here' value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>

      <div className='form-control'>
          <label>Day and time</label>
          <input type = "text" placeholder='Add a day and time here' value={day} onChange={(e) => setDay(e.target.value)}></input>
      </div>

      <div className='form-control-check'>
          <label>Set reminder</label>
          {/* gives a true or false value since it is a boolean to see if it has been checked or not */}
          <input type = "checkbox" checked = {reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
      </div>

      <input type= 'submit' value='Save task' className='btn btn-block'></input>
  </form>
  );
};

export default AddTask;
