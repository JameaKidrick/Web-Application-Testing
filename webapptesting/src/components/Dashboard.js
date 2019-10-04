import React, { useState } from 'react'
import Display from './Display'

// FUNCTION TO ADD 1 TO STRIKES IF IT IS BELOW 3
export const addStrikes = (strikes) => {
  return strikes < 2 ? strikes + 1 : 0
}

// FUNCTION TO ADD 1 TO BALLS IF IT IS BELOW 4
export const addBalls = (balls) => {
  return balls < 3 ? balls + 1 : 0
}

// FUNCTION TO ADD 1 TO STRIKES IF THE NUMBER OF STRIKES IS LESS THAN 2 AND ADD 0 TO STRIKES IF THE NUMBER OF STRIKES IS GREATER THAN OR EQUAL TO 2
export const Foul = (strikes) => {
  return strikes >= 2 ? strikes + 0 : strikes + 1
}

// FUNCTION TO RESET STRIKES ***OR*** BALLS TO 0
export const Hit = (strikes, balls) => {
  return 0;
}

const Dashboard = () => {
  
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  // ADDED _HIT FUNCTION TO SET BOTH STRIKES AND BALLS TO 0 AT THE SAME TIME
  const _Hit = () => {
    setStrikes(Hit(0))
    setBalls(Hit(0))
  }

  // WHEN THE NUMBER OF STRIKES IS LESS THAN 2, 1 WILL BE ADDED, OTHERWISE, BOTH STRIKES AND BALLS WILL BE SET TO 0
  const _addStrikes = (strikes) => {
    if(strikes < 2){
      setStrikes(strikes + 1)
    }else{
      setStrikes(0)
      setBalls(0)
    }}

    // WHEN THE NUMBER OF BALLS IS LESS THAN 3, 1 WILL BE ADDED, OTHERWISE, BOTH STRIKES AND BALLS WILL BE SET TO 0
  const _addBalls = (balls) => {
    if(balls < 3){
    setBalls(balls + 1)
  }else{
    setStrikes(0)
    setBalls(0)
  }}

  return (
    <div>
      <Display 
      strikes={strikes}
      balls={balls}
      />
      <button onClick={() => _addStrikes(strikes)}>Add Strike</button>
      <button onClick={() => _addBalls(balls)}>Add Ball</button>
      <button onClick={() => setStrikes(Foul(strikes))}>Foul Ball</button>
      <button onClick={() => _Hit()}>Hit</button>
    </div>
  )
}

export default Dashboard;