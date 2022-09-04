import React from 'react'
import resume from '../../assets/resume.pdf'
const ActionBtn = () => {
  return (
    <div className='action'>
<a href={resume} download className='btn'>My Resume</a>
<a href="#contacts" className='btn btn_primary'>Contact</a>
    </div>
  )
}

export default ActionBtn