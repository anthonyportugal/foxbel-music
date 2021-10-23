import React, { useContext, useState } from 'react'
import { MusicContext } from '../../../context/DataContext'
import './audioPlayer.scss'

const AudioPlayer = () => {
  const {
    togglePlayPause,
    selectedMusic,
    toggleClassCss
  } = useContext(MusicContext)

  const togglePlayPauseWithClassCss = () => {
    toggleClassCss()
    togglePlayPause()
  }

  const [volume, setVolume] = useState(50)
  const changeVolume = (e) => {
    setVolume(e.target.value)
    console.log(volume);
  }

  return (
    <div className="AudioPlayer">
      <div className="AudioPlayer__cover">
        <div>
          <img src={selectedMusic?.album.cover_medium} alt="cover" />
        </div>
        <div>
          <p>{selectedMusic?.title}</p>
          <p>
            <span>{selectedMusic?.artist.name}</span> - <span>{selectedMusic?.album.title}</span>
          </p>
        </div>
      </div>
      <div className="AudioPlayer__buttons">
        <div>
          <i className="fas fa-step-backward"></i>
        </div>
        <div>
          <i
            id="play-pause-button"
            className="fas fa-play-circle"
            onClick={() => togglePlayPauseWithClassCss()}
          ></i>
        </div>
        <div>
          <i className="fas fa-step-forward"></i>
        </div>
      </div>
      <div className="AudioPlayer__vol">
        <div>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            // value={volume}
            defaultValue={volume}
            // onChange={() => changeVolume}
            onMouseUp={() => changeVolume}
          />
        </div>
        <div>
          <i className="fas fa-volume-off"></i>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer
