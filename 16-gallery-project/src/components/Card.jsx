import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url} target='_blank'>
                <div className='h-50 w-50 rounded-xl overflow-hidden'>
                    <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
                </div>
                <h3 className='font-semibold text-lg mt-1'>{props.elem.author}</h3>
            </a>
        </div>
    )
}

export default Card
