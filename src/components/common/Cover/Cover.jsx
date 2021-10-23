import React, { useContext } from 'react'
import { MusicContext } from '../../../context/DataContext'
import './cover.scss'

const Cover = () => {
  const { music } = useContext(MusicContext)

  return (
    <div className="Cover">
      <div className="Cover__img">
        <img src={music[0]?.artist.picture_big} alt="cover" />
      </div>
      <div className="Cover__content">
        <div className="Cover__details">
          <h3>{music[0]?.artist.name}</h3>
          <p>Lo mejor de {music[0]?.artist.name} <span>84 423 Seguidores</span> </p>
          <p>Disfruta lo mejor de la música con Fosbel Music.</p>
          <button className="Cover__btn-filled">Reproducir</button>
          <button className="Cover__btn-outline">Seguir</button>
        </div>
      </div>
      <div className="Cover__background"></div>
    </div>
  )
}

export default Cover
