import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState([10, 20, 30])

  const btnClicked = ()=>{
    const newNum = [...num]
    newNum.push(40)
    setnum(newNum)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
