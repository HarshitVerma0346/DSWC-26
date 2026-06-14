import React, { useState } from 'react';

const App = () => {
  const [num, setnum] = useState(10)
  function changeNum(){
    setnum(num + 10);
  }

  return (
    <div>
      <h1>Value of num is: {num}</h1>
      <button onClick={changeNum}>Click here!</button>
    </div>
  )
}

export default App
