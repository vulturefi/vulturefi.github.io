import React, { ReactElement, Ref, useState } from 'react'
import CrossIconJson from './lottie-files/cross-icon.json'
import Lottie from 'react-lottie-player'

interface Props {
    width?: number
    margin?: string
  }

function CrossIcon({ width = 24, margin = '0' }: Props): ReactElement {

  const [playing, setPlaying] = useState(false);

  return (
    <Lottie 
        animationData={CrossIconJson}
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

export default CrossIcon