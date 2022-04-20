import React from 'react'

const Button = ({ children, color }) => {
  return (
    <button className='btn' style={{ background: color }}>
        { children }
    </button>
  )
}

export default Button