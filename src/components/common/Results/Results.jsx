import React, { useContext } from 'react'
import { MusicContext } from '../../../context/DataContext'
import AlbumCard from '../AlbumCard/AlbumCard'
import './results.scss'

const Results = () => {
  const { music } = useContext(MusicContext)

  return (
    <div className="Results">
      {/* <AlbumCard className="Results__item" />
      <AlbumCard className="Results__item" />
      <AlbumCard className="Results__item" />
      <AlbumCard className="Results__item" />
      <AlbumCard className="Results__item" /> */}
      <h3>Resultados</h3>
      <div className="Results__container">
        {music?.map((item, key) => {
          return (
            <AlbumCard
              key={key}
              className="Results__item"
              imgSrc={item.album.cover_medium}
              albumTitle={item.album.title}
              artistName={item.artist.name}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Results
