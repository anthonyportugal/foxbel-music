import React from 'react'
import './searchInput.scss'

const SearchInput = () => {
  return (
    <div className="Search">
      <div className="Search__box">
        <input
          className="Search__input"
          type="text"
          placeholder="Buscar"
        />
        <div className="Search__btn">
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  )
}

export default SearchInput
