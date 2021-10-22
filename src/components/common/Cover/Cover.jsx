import React, { useContext } from 'react'
import { MusicContext } from '../../../context/DataContext'
import './cover.scss'

const Cover = () => {
  const { music/* , artist  */ } = useContext(MusicContext)

  // const validate = async () => {
  //   if (await artist?.error) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  return (
    <div className="Cover">
      <div className="Cover__img">
        <img src={/* validate ? artist?.picture_big :  */music[0]?.artist.picture_big} alt="cover" />
      </div>
      <div className="Cover__content">
        <div className="Cover__details">
          <h3>{/* validate ? artist?.name :  */music[0]?.artist.name}</h3>
          <p>Lo mejor de {/* validate ? artist?.name :  */music[0]?.artist.name} <span>Cantidad Seguidores</span> </p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias voluptatibus ad! Iste in deserunt.</p>
          <button className="Cover__btn-filled">Reproducir</button>
          <button className="Cover__btn-outline">Seguir</button>
        </div>
      </div>
      <div className="Cover__background"></div>
    </div>
  )
}

export default Cover
