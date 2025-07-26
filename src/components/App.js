import React, { useState } from 'react';

import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
const App = () => {
   const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent1 updateOption={setSelectedOption} />
      <ChildComponent2 updateOption={setSelectedOption} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default App
