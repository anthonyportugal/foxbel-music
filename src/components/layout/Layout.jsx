import React from 'react'
import AudioPlayer from '../common/AudioPlayer/AudioPlayer'
import Header from '../common/Header/Header'
import Sidebar from '../common/Sidebar/Sidebar'
import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="Content">
        <Header />
        {children}
      </div>
      <AudioPlayer />
    </>
  )
}

export default Layout
