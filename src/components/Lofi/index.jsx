import React from 'react'
import ReactPlayer from 'react-player'
import { data } from '../../data'
import './styles.css'

const Lofi = ({ mood }) => {
  const [lofiTrack, setLofiTrack] = React.useState(
    'https://www.youtube.com/embed/5qap5aO4i9A',
  )

  React.useEffect(() => {
    data.forEach((item) => {
      if (item.mood.toLowerCase() === mood.toLowerCase())
        setLofiTrack(item.lofi)
    })
  }, [mood])

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
    </div>
  )
}

export default Lofi
