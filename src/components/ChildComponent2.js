import React from 'react'

const ChildComponent2 = ({ updateOption }) => {
  return (
    <div style={{ backgroundColor: 'orange', padding: '20px', margin: '10px' }}>
      <h2>Child Component 2</h2>
      <button onClick={() => updateOption('Option 2')}>Option 2</button>
    </div>
  )
}

export default ChildComponent2