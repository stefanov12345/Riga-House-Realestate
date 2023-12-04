import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className='g-wrapper'>
     <div className='paddings innerWidth g-container'>
         <div className="flexColCenter inner-container">
           <span className='primaryText'>Get started with home</span>
           <span className='secondaryText'>
            subscrib and find super attractive prices quotes from us.
            <br/>
            Find  your recidece soon 
           </span>
           <button className="button" href>
            <a href="mailto:stefanovanucciv@gmail.com">Get Started</a>
          </button>
        </div>
     </div>
    </section>
  )
}

export default GetStarted
