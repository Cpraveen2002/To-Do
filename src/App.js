
import './App.css';
import { useEffect, useState } from 'react';
import TaskInput from './Components/TaskInput';
import Task  from './Components/Task';
function App() {
   const [tasks, setTasks] = useState([])
   const[completed, setCompleted]= useState(0)
   const [checked, setChecked]=useState(false)
   const [editMode, setEditMode]= useState(false)
  
   function addName(newName){
    setTasks( prev=>{
       return [...prev,{name:newName}]
    })
   }
   function onRemove(taskIndex){
    if(checked){
       alert('make this task as Incomplete')
    }
    else{
      setTasks( prev =>{
        return prev.filter((taskObject,index)=> index != taskIndex)
       })
    }
       
   }

   function editHandler(index,newName){
    setTasks(prev=>{
      const newTasks=[...prev]
      newTasks[index].name = newName
      return newTasks;
    })
   }
  return(
    <main>
      <h1>{completed}/{tasks.length} completed tasks</h1>
      <div className='Output'>
      <TaskInput addName={addName}/>
        { tasks.map((task, index) =>(
            <Task {...task}
            editMode={editMode}
            setEditMode={setEditMode}
            task={task}
            checked={checked}
            setChecked={setChecked}
            completed={completed}
            setCompleted={setCompleted}
            editHandler={(newName)=>editHandler(index,newName)}
            onRemove={()=>onRemove(index)}/>
          ))}
     </div>
    </main>
     
     
    ) 
}

export default App;
