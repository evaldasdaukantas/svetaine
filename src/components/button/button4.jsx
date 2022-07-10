import React from 'react'
import './button.css'
import { useNavigate } from 'react-router-dom'

function button  () {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let navigate = useNavigate()
  return (
    <div>
        <button className='button-main' onClick={()=>{navigate('/contact')}}>Get in touch</button>
    </div>
  )
}

export default button