import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full overflow-x-auto scroll-smooth p-4 flex flex-nowrap gap-5 w-2/3'>
      {props.users.map(function(elem, idx){
        return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default Rightcontent
