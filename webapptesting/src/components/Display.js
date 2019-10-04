import React, { useState } from 'react'

const Display = props => {

  return(
    <div>
      Display Component
      <div>Strike: {props.strikes}</div>
      <div>Ball: {props.balls}</div>
    </div>
    
  )
}

export default Display;