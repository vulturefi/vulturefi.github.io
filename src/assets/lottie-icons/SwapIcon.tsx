import React, { ReactElement, Ref, useState } from 'react'
import SwapLordicon from './lottie-files/swap-icon.json'
import Lottie from 'react-lottie-player'

function SwapIcon(): ReactElement {

  const [playing, setPlaying] = useState(false);

  return (
    <Lottie 
        animationData={SwapLordicon}
        style={{
        height: 30,
        width: 30
        }}
        onMouseOver={() => setPlaying(true)}
        onLoopComplete={() => setPlaying(false)}
        play={playing}
    />  
  )
}

export default SwapIcon
