import React from 'react'

const ChildComponent1 = ({ updateOption }) => {
  return (
    <div style={{ backgroundColor: 'brown', padding: '20px', margin: '10px' }}>
      <h2>Child Component 1</h2>
      <button onClick={() => updateOption('Option 1')}>Option 1</button>
    </div>
  )
}

export default ChildComponent1