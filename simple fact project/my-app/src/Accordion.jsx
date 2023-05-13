import React from 'react'

export default function Accordion({title,active,setActive}) {
  return (
    <div className='accordion'>
        <div className='accordion-heading'>
           <div className='container'>
                <p>{title}</p>
                <span onClick={()=>setActive(title)}>Click Me</span>
           </div>
        </div> 
        <div className={(active ===title ? "show" : "" )+"accordion-content"}>
            <div className="container">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, beatae.</p>
            </div>
        </div>
    </div>
  )
}
