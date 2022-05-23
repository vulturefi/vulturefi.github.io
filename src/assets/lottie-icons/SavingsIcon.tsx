import React, { ReactElement, Ref, useState } from 'react'
import SavingsIconJson from './lottie-files/savings-icon.json'
import Lottie from 'react-lottie-player'

interface Props {
    width?: number
    margin?: string
    style?: React.CSSProperties
  }

function SavingsIcon({ width = 24, margin = '0', style }: Props): ReactElement {

  const [playing, setPlaying] = useState(false);

  return (
    <Lottie 
        animationData={SavingsIconJson}
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

export default SavingsIcon