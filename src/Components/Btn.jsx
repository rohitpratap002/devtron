import React from 'react'
import '../Styles/Btn.css'

const Btn = ({click=()=>{}}) => {
  return (
    <button onClick={click} className='btnPrimary'>FREE DEMO</button>
  )
}

export default Btn