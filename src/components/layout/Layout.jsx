import React from 'react'
import Sidebar from '../common/Sidebar/Sidebar'
import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="Content">
        {children}
      </div>
    </>
  )
}

export default Layout
