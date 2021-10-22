import React from 'react'
import { Link } from 'react-router-dom';
import './albumCard.scss'

const AlbumCard = ({ imgSrc, albumTitle, artistName }) => {
  return (
    <div className="AlbumCard">
      <img src={imgSrc} alt="album-card" />
      <Link to='/' className="AlbumCard__album">{albumTitle}</Link>
      <Link to='/' className="AlbumCard__artist">{artistName}</Link>
    </div>
  )
}

export default AlbumCard
