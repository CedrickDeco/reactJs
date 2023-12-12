import React from 'react'
import BannerService from '../components/BannerService'
import BreadcrumbService from '../components/BreadcrumbService'
import Infobar from '../components/Infobar'
import Navigation from '../components/Navigation'
import Section7 from '../components/Section7'
import Service1 from '../components/Service1'
import Service2 from '../components/Service2'
import Service3 from '../components/Service3'
import Service4 from '../components/Service4'
import Service5 from '../components/Service5'
import Service11 from '../components/Service11'
import Topbar from '../components/Topbar'

const Services = () => {
  return (
    <div>
      <Topbar />
      <Infobar />
      <Navigation />
      <BannerService />
      <BreadcrumbService />
      <Service11 />
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
      <Service5 />
      <Section7 />
    </div>
  )
}

export default Services
