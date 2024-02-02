import React, {useState} from 'react'

function TaskInput({addName}) {
    const [taskName, setTaskname]= useState('')
    function clickHandler(e){
        e.preventDefault();
        addName(taskName)
        setTaskname('')
      }
    
  return (

    <div className='input-class'>
        <form  onSubmit={(e)=>e.preventDefault()}>
          <input 
        type="text"
        value={taskName}
        onChange={(e)=>setTaskname(e.target.value)}
        placeholder='Add Your Task here....'
        />
        <button onClick={clickHandler}>+</button>  
        </form>
        
    </div>
    
  )
}

export default TaskInput