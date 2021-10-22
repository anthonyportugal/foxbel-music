import React from 'react'
import { Link } from 'react-router-dom';
import './albumCard.scss'

const AlbumCard = () => {
  return (

    <div className="AlbumCard">
      <img src="" alt="album-card" />
      <Link className="AlbumCard__album">AlbumTitle</Link>
      <Link className="AlbumCard__artist">ArtistName</Link>
    </div>
  )
}

export default AlbumCard
