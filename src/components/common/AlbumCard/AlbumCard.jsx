import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MusicContext } from '../../../context/DataContext';
import './albumCard.scss'

const AlbumCard = ({ item }) => {
  const {
    audio,
    chargeSong,
    setSelectedMusic,
    toggleClassCssPlayButton
  } = useContext(MusicContext)

  const selectSong = async (songLink) => {
    if (audio.paused === false) {
      audio.pause()
      toggleClassCssPlayButton()
    }
    await chargeSong(songLink)
    await setSelectedMusic(item)
  }

  return (
    <div className="AlbumCard">
      <img
        src={item.album.cover_medium}
        alt="album-card"
        onClick={() => selectSong(item.preview)}
      />
      <Link to='/' className="AlbumCard__album">{item.album.title}</Link>
      <Link to='/' className="AlbumCard__artist">{item.artist.name}</Link>
    </div>
  )
}

export default AlbumCard
