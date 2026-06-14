import React from 'react'

const App = () => {

    localStorage.clear()
    localStorage.setItem('name', 'John Doe')
    const name = localStorage.getItem('name') // 'John Doe'
    console.log(name)

    const user = {
        name: 'John Doe',
        age: 30
    }

    localStorage.setItem('user', JSON.stringify(user))

     const userFromStorage = JSON.parse(localStorage.getItem('user'))
     console.log(userFromStorage)

  return (
    <div>
      App
    </div>
  )
}

export default App
