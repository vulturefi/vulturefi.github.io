import React, { MutableRefObject, ReactElement, Ref, useImperativeHandle, useRef, useState } from 'react'
import SettingsLordIcon from './lottie-files/settings-icon.json'
import Lottie from 'react-lottie-player'

const SettingsIcon = React.forwardRef<HTMLDivElement>((props, ref) => {

  const [playing, setPlaying] = useState(false);

  return (
    <Lottie 
        animationData={SettingsLordIcon}
        ref={ref}
        style={{
        height: 30,
        width: 30
        }}
        onMouseEnter={() => setPlaying(true)}
        onMouseLeave={() => setPlaying(false)}
        play={playing}
    />  
    )
  }
)

export default SettingsIcon

// const SettingsIcon = React.forwardRef<HTMLDivElement>((props, ref) => {

//     const play = () => lottie.play(SettingsIconKey)
  
//     const stop = () => lottie.stop(SettingsIconKey)
    
//     React.useEffect(() => {
//       if (ref?.current) {
//         lottie.loadAnimation({
//           name: SettingsIconKey,
//           container: ref?.current,
//           animationData: SettingsLordIcon,
//           autoplay: false,
//           loop: true
//         });
//       }
//     }, [ref]);
  
//     return (
//       <></>
//       )
//     }
//   )