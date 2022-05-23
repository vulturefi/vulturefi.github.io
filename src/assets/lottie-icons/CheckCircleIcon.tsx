import React, { ReactElement, Ref, useState } from 'react'
import CheckCircleIconJson from './lottie-files/checkcircle-icon.json'
import Lottie from 'react-lottie-player'


interface Props {
  width?: number
  margin?: string
  style?: React.CSSProperties
}
function CheckCircleIcon({ width = 24, margin = '0', style }: Props): ReactElement {

  const [playing, setPlaying] = useState(true);

  return (
    <Lottie 
        animationData={CheckCircleIconJson}
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

export default CheckCircleIcon
