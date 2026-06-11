import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aryan' age={21}/>
      <Card user='Harshit' age={20}/>
    </div>
  )
}

export default App
