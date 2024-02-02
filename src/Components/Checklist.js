import React from 'react'

function Checklist({onChange}) {
  return (
    <div onChange={onChange}>
        <input type='checkbox' />  
    </div>
  )
}

export default Checklist