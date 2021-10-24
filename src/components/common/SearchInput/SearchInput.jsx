import axios from 'axios'
import React, { useContext, useState } from 'react'
import { MusicContext } from '../../../context/DataContext'
import './searchInput.scss'
import { Api } from '../../../consts/index'

const SearchInput = () => {
  const { setMusic } = useContext(MusicContext)

  const [searchText, setSearchText] = useState('')
  const searchMusic = e => {
    setSearchText(e.target.value)
  }

  async function searchOnDeezer() {
    try {
      document.getElementById('loader').classList.remove('hidden')
      const data = await axios.get(`${Api.urlWithCorsProxy}/search?q=${searchText}`)
      setMusic(data?.data.data)
      document.getElementById('loader').classList.add('hidden')
      // console.log(data);
    } catch (e) {
      console.error(e);
    }
  }

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
