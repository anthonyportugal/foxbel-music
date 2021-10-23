import React, { useContext } from 'react'
import { MusicContext } from '../../../context/DataContext'
import AlbumCard from '../AlbumCard/AlbumCard'
import './results.scss'

const Results = () => {
  const { music } = useContext(MusicContext)

  return (
    <div className="Results">
      <h3>Resultados</h3>
      <div className="Results__container">
        {music?.map((item, key) => {
          return (
            <AlbumCard
              key={key}
              className="Results__item"
              item={item}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Results
