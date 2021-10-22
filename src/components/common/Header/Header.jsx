import React from 'react'
import SearchInput from '../SearchInput/SearchInput'
import './header.scss'

const Header = () => {
  return (
    <div className="Header">
      <SearchInput />
      <div className="Header__user">
        <h5>
          <span>
            <i className="fas fa-user"></i>
          </span>
          Anthony P.
        </h5>
      </div>
    </div>
  )
}

export default Header
