import React, { useState } from 'react'
import Display from './Display'

export const Sssss = (strikes, balls, cb) => {
  // return strikes === 2 ? addStrikes(strikes) : Hit(strikes, balls)
  if(strikes === 2){
    return Hit(strikes, balls)
  }else{
    return addStrikes(strikes)
  }
}

export const addStrikes = (strikes) => {
  return strikes + 1
}

export const addBalls = (balls) => {
  return balls + 1
}

export const Foul = (strikes) => {
  return strikes >= 2 ? strikes + 0 : strikes + 1
}

export const Hit = (strikes, balls) => {
  return strikes - strikes && balls - balls;
}

// export const strikeOut = (strikes, balls) => {
//   return strikes - strikes && balls - balls;
// }

const Dashboard = () => {
  
  const [strikes, setStrikes] = useState (0)
  const [balls, setBalls] = useState (0)

  const _addStrikes = (strikes, balls, cb) => {
    setStrikes(addStrikes(strikes));
    setBalls(Hit(balls));
  }

  const _addBalls = balls => {
    setBalls(addBalls(balls))
  }

  const _Foul = strikes => {
    setStrikes(Foul(strikes))
  }

  const _Hit = (strikes, balls) => {
    setStrikes(Hit(strikes));
    setBalls(Hit(balls));
  }





  return (
    <div>
      Dashboard Component
      <Display 
      strikes={strikes}
      addStrikes={_addStrikes}
      balls={balls}
      addBalls={_addBalls}
      Foul={_Foul}
      Hit={_Hit}
      Test={Sssss}
      />
    </div>
  )
}

export default Dashboard;