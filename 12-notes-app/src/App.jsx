import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title, details})
    settask(copyTask)

    settitle('')
    setdetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]

    copyTask.splice(idx, 1)
    settask(copyTask)
    
  }

  return (
    <div className='h-screen overflow-hidden lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 items-start flex-col p-10'>

        <h1 className='text-3xl font-bold mb-6'>Add Notes</h1>

        <input value={title} onChange={(e) => {
          settitle(e.target.value)
        }} className='font-medium px-5 py-2 w-full border-2 rounded outline-none' type='text' placeholder='Enter note heading' />

        <textarea value={details} onChange={(e) => {
          setdetails(e.target.value)
        }} className='font-medium px-5 py-2 flex w-full border-2 rounded h-34 outline-none' type='text' placeholder='Enter details' />

        <button className='font-medium active:scale-95 bg-white text-black w-full px-5 py-2 rounded cursor-pointer'>Add note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l flex flex-col h-full p-10'>
        <h1 className='text-3xl font-bold mb-10'>Recent Notes</h1>
        <div className='flex flex-wrap flex-1 items-start justify-start gap-6 overflow-y-auto text-black'>
          {task.map(function(elem, idx){
            return <div key={idx} className='relative h-52 w-40 bg-white p-4 rounded-xl'>
              <h3 className='leading-tight text-lg font-semibold'>{elem.title}</h3>
              <p className='leading-tight mt-2 text-gray-500'>{elem.details}</p>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-30 active:scale-95 absolute bottom-3 bg-red-500 text-white px-4 py-1 rounded-full cursor-pointer text-xs'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App

