import React, { useState } from 'react'
import Checklist from './Checklist'

function Task({name,onRemove,editHandler,task,completed,setCompleted,checked, setChecked}) {
   const [editMode, setEditMode]= useState(false)
   const [finish,setFinish] = useState(true)
   const[id, setId] = useState(1)
   function addTask(){

    setCompleted(prev=> prev+1)
    setId(prev=>prev+1)
    setChecked(true)
    setFinish(false)
   }
   function reTask(){
    setCompleted(prev=>prev-1)
    setFinish(true)
    setChecked(false)
     
   }
   console.log(completed)
     
  return (
    <div className='tasklist'>
        
        <div className='check'> 
             <Checklist key={completed.id} value={name} onChange={(finish)?addTask : reTask}/>
          {name}
          {
             editMode && (
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        setEditMode(false)
                    }}>
                       <input 
                       type="text" 
                       value={name}
                       onChange={(e)=>editHandler(e.target.value)}
                       /> 
                    </form>
             )
          }
          <div className='clicks'>
            <button onClick={()=>setEditMode(true)}>Edit</button>
        <button onClick={onRemove}>
            Delete
        </button>
          </div>
          
        </div>
        
    </div>
  )
}

export default Task