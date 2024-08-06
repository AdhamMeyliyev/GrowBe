import React from 'react'

const Statistics = () => {
  return (
    <div className='statistic'>
        <div className="statistics-wrapper">
            <span className='happy-clients'>
                <span className='number'>95</span>
                <p className="heading">Happy Clients</p>
            </span>

            <span className='circle-1'></span>

            <span className='project-done'>
                <span className='number'>115</span>
                <p className="heading">Project Done</p>
            </span>

            <span className='circle-2'></span>

            <span className='years-of-experince'>
                <span className='number'>8+</span>
                <p className="heading">Years Of Experince</p>
            </span>

            <span className='circle-3'></span>

            <span className='national-awards'>
                <span className='number'>12 </span>
                <p className="heading">National Awards</p>
            </span>
        </div>
      
    </div>
  )
}

export default Statistics
