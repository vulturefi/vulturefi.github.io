import React, { ReactElement, Ref, useState } from 'react'
import ArrowUpIconJson from './lottie-files/arrowup-icon.json'
import Lottie from 'react-lottie-player'

interface Props {
    width?: number
    margin?: string
  }

function ArrowUpIcon({ width = 24, margin = '0' }: Props): ReactElement {

  const [playing, setPlaying] = useState(false);

  return (
    <Lottie 
        animationData={ArrowUpIconJson}
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

export default ArrowUpIcon
