import React, { ReactElement, useState } from 'react'
import WarningIconJson from './lottie-files/warning-icon.json'
import Lottie from 'react-lottie-player'

interface Props {
    width?: number
    margin?: string
    style?: React.CSSProperties
  }

function WarningIcon({ width = 24, margin = '0', style }: Props): ReactElement {

  const [playing, setPlaying] = useState(true);

  return (
    <Lottie 
        animationData={WarningIconJson}
        style={{
            ...style,
            width: width,
            height: width,
            margin: margin,
        }}
        onMouseOver={() => setPlaying(true)}
        onLoopComplete={() => setPlaying(false)}
        play={playing}
    />  
  )
}

export default WarningIcon