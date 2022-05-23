import React, { ReactElement, Ref, useState } from 'react'
import InfoIconJson from './lottie-files/info-icon.json'
import Lottie from 'react-lottie-player'

function InfoIcon(): ReactElement {

  const [playing, setPlaying] = useState(false);

  return (
    <Lottie 
        animationData={InfoIconJson}
        style={{
        height: 20,
        width: 20
        }}
        onMouseOver={() => setPlaying(true)}
        onLoopComplete={() => setPlaying(false)}
        play={playing}
    />  
  )
}

export default InfoIcon
