import React from 'react'
import Infobar from '../components/Infobar'
// import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import BannerContact from '../components/BannerContact'
import BreadcrumbContact from '../components/BreadcrumbContact'
import Section5 from '../components/Section5'
import Section7 from '../components/Section7'
import Topbar from '../components/Topbar'


const Contact = () => {
  return (
    <div>
      <Topbar />
      <Infobar />
      <Navigation />
      <BannerContact />
      <BreadcrumbContact />
      <Section5 />
      <Section7 />
      {/* <Mouse /> */}
    </div>
  )
}

export default Contact
