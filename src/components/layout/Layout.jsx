import React from 'react'
import { Fragment } from 'react'
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
    </>
  )
}

export default Layout
