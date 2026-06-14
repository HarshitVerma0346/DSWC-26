import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  useEffect(function() {
    console.log('useEffect running...')
  }, [num])

  return (
    <div>
      <h1>num: {num}</h1>
      <button onClick={() => setNum(num + 1)}>Click here</button>
    </div>
  )
}

export default App
