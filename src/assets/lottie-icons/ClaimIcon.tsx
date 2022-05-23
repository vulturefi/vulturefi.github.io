import React, { ReactElement, Ref, useState } from 'react'
import ClaimIconJson from './lottie-files/claim-icon.json'
import Lottie from 'react-lottie-player'

interface Props {
    width?: number
    margin?: string
  }

function ClaimIcon({ width = 24, margin = '0' }: Props): ReactElement {

  const [playing, setPlaying] = useState(false);

  return (
    <Lottie 
        animationData={ClaimIconJson}
        style={{
            width: width,
            height: width,
        }}
        onMouseOver={() => setPlaying(true)}
        onLoopComplete={() => setPlaying(false)}
        play={playing}
    />  
  )
}

export default ClaimIcon