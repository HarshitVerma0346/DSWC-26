import React from 'react'

const Rightcardcontent = (props) => {   
  return (
    <div className='h-full w-full absolute top-0 left-0 text-white bg-gray-800/50 p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-bold flex items-center justify-center rounded-full h-8 w-8 text-black'>{props.id+1}</h2>
        <div>
            <p className='mb-8 leading-relaxed font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, qui at corrupti architecto incidunt reprehenderit?</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 font-medium rounded-full px-6 py-2 pr-14'>{props.tag}</button>
                <button className='bg-blue-600 font-medium rounded-full px-3 py-2'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Rightcardcontent
