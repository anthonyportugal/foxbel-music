import React from 'react'
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom'
import logo from '../../../assets/foxbel-music.png'
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <img
        src={logo}
        alt="logo"
        className="Sidebar__logo"
      />
      <ul>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="Sidebar__title"
            >
              {val.title}

              {val.items.map((val, key) => {
                return (
                  <p
                    key={key}
                    className='Sidebar__link'
                  >
                    <Link
                      className='Sidebar__link'
                      to={val.link}
                    >
                      {val.title}
                    </Link>
                  </p>
                )
              })}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
