import React, { ReactElement, Ref, useState } from 'react'
import WalletIconJson from './lottie-files/wallet-icon.json'
import Lottie from 'react-lottie-player'

interface Props {
    width?: string | number
    margin?: string
    style?: React.CSSProperties
    reference?: React.RefObject<HTMLDivElement>
  }

function WalletIcon({ width = 24, margin = '0', style, reference }: Props): ReactElement {

  const [playing, setPlaying] = useState(false);

  const Icon = React.forwardRef<React.RefObject<HTMLDivElement>, Props>((props, ref) => (
        <Lottie 
        animationData={WalletIconJson}
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
  ))

  return (
    <Icon />
  )
}

export default WalletIcon
