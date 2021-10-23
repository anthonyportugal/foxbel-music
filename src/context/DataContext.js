import { createContext, useState } from "react";

export const MusicContext = createContext()

export const DataProvider = ({ children }) => {
  const [music, setMusic] = useState([])
  const [audio, setAudio] = useState(new Audio())
  const [selectedMusic, setSelectedMusic] = useState()

  const togglePlayPause = async () => {
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
  }
  const toggleClassCss = () => {
    const playPauseButton = document.getElementById('play-pause-button');
    if (playPauseButton.classList.contains('fa-play-circle')) {
      playPauseButton.classList.remove('fa-play-circle')
      playPauseButton.classList.add('fa-pause-circle')
    } else if (playPauseButton.classList.contains('fa-pause-circle')) {
      playPauseButton.classList.add('fa-play-circle')
      playPauseButton.classList.remove('fa-pause-circle')
    }
  }
  const chargeSong = async (link) => {
    setAudio(new Audio(link))
  }

  return (
    <MusicContext.Provider
      value={{
        music,
        setMusic,
        audio,
        chargeSong,
        togglePlayPause,
        selectedMusic,
        setSelectedMusic,
        toggleClassCss
      }}
    >
      {children}
    </MusicContext.Provider>
  )
}