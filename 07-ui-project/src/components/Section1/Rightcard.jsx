import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full shrink-0 w-80 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img}/>
      <Rightcardcontent id={props.id} tag={props.tag}/>
    </div>
  )
}

export default Rightcard
