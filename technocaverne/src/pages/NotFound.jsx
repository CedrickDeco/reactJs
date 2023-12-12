import React from 'react'
import Infobar from '../components/Infobar'
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import Topbar from '../components/Topbar'

const NotFound = () => {
  return (
    <div>
      <Topbar />
      <Mouse />
      <Infobar />
      <Navigation />
      <h1>Not found</h1>
    </div>
  )
}

export default NotFound
