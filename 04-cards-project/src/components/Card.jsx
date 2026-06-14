import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
    
  return (
    <div className='card'>
      <div>
        <div className="top">
        <img src={props.companyLogo}></img>
        <button>Save <Bookmark /> </button>
      </div>

      <div className="center">
        <h3>{props.companyName} <span>{props.posted}</span></h3>
        <h2>{props.jobRole}</h2>
        <div>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
        </div>
      </div>
      </div>

      <div className="bottom">
        <div>
            <h3>${props.payRate}/hr</h3>
            <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card
