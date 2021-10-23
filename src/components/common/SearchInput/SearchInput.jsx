import axios from 'axios'
import React, { useContext, useState } from 'react'
import { MusicContext } from '../../../context/DataContext'
import './searchInput.scss'
import { Api } from '../../../consts/index'

const SearchInput = () => {
  // IMPORT CONTEXT
  const { setMusic/* , setArtist  */ } = useContext(MusicContext)
  // SEARCH INPUT
  const [searchText, setSearchText] = useState('')
  const searchMusic = e => {
    setSearchText(e.target.value)
  }

  // SEARCH ON DEEZER API
  async function searchOnDeezer() {
    try {
      const data = await axios.get(`${Api.urlWithCorsProxy}/search?q=${searchText}`)
      setMusic(data?.data.data)
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }

  // async function searchArtistOnDeezer() {
  //   try {
  //     const data = await axios.get(`${Api.urlWithCorsProxy}/artist/${searchText}`)
  //     setArtist(data?.data)
  //     console.log(data);
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  // function searchMusicAndArtist() {
  //   searchOnDeezer()
  //   searchArtistOnDeezer()
  // }

  return (
    <div className="Search">
      <div className="Search__box">
        <input
          className="Search__input"
          type="text"
          placeholder="Buscar"
          value={searchText}
          onChange={searchMusic}
          onKeyPress={e => e.key === 'Enter' && searchOnDeezer()}
        />
        <div
          className="Search__btn"
          onClick={() => searchOnDeezer()}
        >
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  )
}

export default SearchInput
