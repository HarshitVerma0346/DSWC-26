import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black text-white h-screen p-4 overflow-auto'>
      <div className='flex h-[85%] flex-wrap gap-5'>{printUserData}</div>
      <div className='mt-5 flex items-center justify-center gap-5 p-4'>
        <button onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }} className='bg-amber-500 text-black text-sm px-5 py-2 rounded cursor-pointer active:scale-95'>Prev</button>
        <h4>Page {index}</h4>
        <button onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }} className='bg-amber-500 text-black text-sm px-5 py-2 rounded cursor-pointer active:scale-95'>Next</button>
      </div>
    </div>

  )
}

export default App
