import React, { useState } from 'react'

const Display = props => {
  // console.log(props.addStrikes(0, 0))
  return(
    <div>
      Display Component
      <div>Strike: {props.strikes}</div>
      <button onClick={() => props.Test(props.addStrikes(props.strikes, props.balls), props.Hit(props.strikes, props.balls))}>Add Strike</button>
      <div>Ball: {props.balls}</div>
      <button onClick={() => props.addBalls(props.balls)}>Add Ball</button>
      <button onClick={() => props.Foul(props.strikes)}>Foul Ball</button>
      <button onClick={() => props.Hit(props.strikes, props.balls)}>Hit</button>
    </div>
    
  )
}

export default Display;