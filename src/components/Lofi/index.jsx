import React from 'react'
import ReactPlayer from 'react-player'
import { data } from '../../data'
import Vibe from '../Vibe'
import './styles.css'

const Lofi = ({ mood }) => {
  const [lofiTrack, setLofiTrack] = React.useState(
    'https://www.youtube.com/embed/5qap5aO4i9A',
  )
  const [vibeTrack, setVibeTrack] = React.useState('')
  const [rainClick, setRainClick] = React.useState(false)
  const [forestClick, setForestClick] = React.useState(false)

  React.useEffect(() => {
    data.forEach((item) => {
      if (item.mood.toLowerCase() === mood.toLowerCase())
        setLofiTrack(item.lofi)
    })
  }, [mood])

  // React.useEffect(() => {
  //   if (rainClick === true) setVibeTrack('https://sndup.net/rg8h/d')
  //   if (forestClick === true) setVibeTrack('https://sndup.net/zq6w/d')
  // }, [rainClick, forestClick])

  return (
    <div className="frame">
      <ReactPlayer
        width="100%"
        height="100%"
        playing
        control={false}
        volume={1}
        url={lofiTrack}
        config={{
          file: {
            attributes: {
              autoPlay: true,
            },
          },
        }}
      />
      <ReactPlayer
        width="100%"
        height="100%"
        playing={rainClick}
        control={true}
        volume={1}
        url={'https://sndup.net/rg8h/d'}
      />
      <ReactPlayer
        width="100%"
        height="100%"
        playing={forestClick}
        control={true}
        volume={1}
        url={'https://sndup.net/zq6w/d'}
      />
      <Vibe
        rainClick={rainClick}
        forestClick={forestClick}
        setRainClick={setRainClick}
        setForestClick={setForestClick}
      />
    </div>
  )
}

export default Lofi
