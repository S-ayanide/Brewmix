import React from 'react'
import ReactPlayer from 'react-player'
import './styles.css'

const Lofi = () => {
  return (
    <div className="frame">
      <ReactPlayer
        width="100%"
        height="100%"
        playing
        control={false}
        volume={1}
        url="https://www.youtube.com/embed/5qap5aO4i9A"
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
