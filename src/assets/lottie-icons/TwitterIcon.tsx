import React, { ReactElement, useState } from 'react'
import TwitterIconJson from './lottie-files/twitter-icon.json'
import Lottie from 'react-lottie-player'

interface Props {
    width?: number
    margin?: string
    style?: React.CSSProperties
  }

function TwitterIcon({ width = 24, margin = '0', style }: Props): ReactElement {

  const [playing, setPlaying] = useState(false);

  return (
    <Lottie 
        animationData={TwitterIconJson}
        style={{
            ...style,
            width: width,
            height: width,
        }}
        onMouseOver={() => setPlaying(true)}
        onLoopComplete={() => setPlaying(false)}
        play={playing}
    />  
  )
}

export default TwitterIcon