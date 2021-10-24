import React, { useContext } from 'react'
import { MusicContext } from '../../../context/DataContext'
import './audioPlayer.scss'
import foxbelMusicWhiteIcon from '../../../assets/foxbel-music-white-icon.png'

const AudioPlayer = () => {
  const {
    togglePlayPause,
    selectedMusic,
    toggleClassCssPlayButton,
    audio,
    toggleClassCssVolume
  } = useContext(MusicContext)

  const togglePlayPauseWithClassCss = () => {
    toggleClassCssPlayButton()
    togglePlayPause()
  }

  const changeVolume = (e) => {
    audio.volume = e.target.value / 100
    toggleClassCssVolume(e.target.value)
  }

  return (
    <div className="AudioPlayer">
      <div className="AudioPlayer__cover">
        <div>
          <img src={selectedMusic?.album.cover_medium || foxbelMusicWhiteIcon} alt="cover" />
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
            defaultValue={100}
            onChangeCapture={changeVolume}
          />
        </div>
        <div>
          <i id="volume-icon" className="fas fa-volume-up"></i>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer
