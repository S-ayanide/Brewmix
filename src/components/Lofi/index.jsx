import { useStoreState } from "easy-peasy";
import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import ReactPlayer from "react-player";
import { data } from "../../data";
import Vibe from "../Vibe";
import "./styles.css";

const Lofi = ({ mood }) => {
  const [lofiTrack, setLofiTrack] = React.useState(
    "https://www.youtube.com/embed/5qap5aO4i9A"
  );
  const [rainClick, setRainClick] = React.useState(false);
  const [forestClick, setForestClick] = React.useState(false);
  const [trackVolume, setTrackVolume] = React.useState(1);
  const [vibeVolume, setVibeVolume] = React.useState(0.3);

  // Easy Peasy States
  const rainClickMobile = useStoreState((state) => state.rainClickMobile);
  const forestClickMobile = useStoreState((state) => state.forestClickMobile);

  React.useEffect(() => {
    data.forEach((item) => {
      if (item.mood.toLowerCase() === mood.toLowerCase())
        setLofiTrack(item.lofi);
    });
  }, [mood]);

  return (
    <div className="frame">
      <ReactPlayer
        width="100%"
        height="100%"
        playing
        control={false}
        volume={trackVolume}
        url={lofiTrack}
        config={{
          file: {
            attributes: {
              autoPlay: true,
            },
          },
        }}
        loop
      />

      {/* Vibe Audios */}
      <ReactPlayer
        width="100%"
        height="100%"
        playing={rainClick}
        control={true}
        volume={vibeVolume}
        url={"https://sndup.net/rg8h/d"}
        loop
      />
      <ReactPlayer
        width="100%"
        height="100%"
        playing={forestClick}
        control={true}
        volume={vibeVolume}
        url={"https://sndup.net/zq6w/d"}
        loop
      />
      <div className="trackVolumeController">
        <div style={{ display: "flex", marginLeft: "1rem" }}>
          <p className="highlight">Track</p>
          <InputRange
            maxValue={100}
            minValue={0}
            value={Math.round(trackVolume * 100)}
            onChange={(value) => setTrackVolume(value * 0.01)}
          />
        </div>
        <div style={{ display: "flex", marginLeft: "1rem", marginTop: "2rem" }}>
          <p className="highlight">Vibe</p>
          <InputRange
            maxValue={100}
            minValue={0}
            value={Math.round(vibeVolume * 100)}
            onChange={(value) => setVibeVolume(value * 0.01)}
          />
        </div>
      </div>
      <Vibe
        rainClick={rainClick}
        forestClick={forestClick}
        setRainClick={setRainClick}
        setForestClick={setForestClick}
      />
    </div>
  );
};

export default Lofi;
