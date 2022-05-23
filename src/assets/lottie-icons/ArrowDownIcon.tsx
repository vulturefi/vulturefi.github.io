import React, { ReactElement, Ref, useState } from 'react'
import ArrowDownIconJson from './lottie-files/arrowdown-icon.json'
import Lottie from 'react-lottie-player'

interface Props {
    width?: number
    margin?: string
  }

function ArrowDownIcon({ width = 24, margin = '0' }: Props): ReactElement {

  const [playing, setPlaying] = useState(false);

  return (
    <Lottie 
        animationData={ArrowDownIconJson}
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

export default ArrowDownIcon
