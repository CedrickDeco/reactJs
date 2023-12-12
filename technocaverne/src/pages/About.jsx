import React from 'react'
import AboutSection1 from '../components/AboutSection1'
import BannerAbout from '../components/BannerAbout'
import Mission from '../components/Mission'
import Valeur from '../components/Valeur'
import BreadcrumbAbout from '../components/BreadcrumbAbout'
import Infobar from '../components/Infobar'
import Navigation from '../components/Navigation'
import Topbar from '../components/Topbar'
import Devis from '../components/Devis'
import Engagement from '../components/Engagement'
import Garanti from '../components/Garanti'
import Section7 from '../components/Section7'

const About = () => {
  return (
    <div>
      <Topbar />
      <Infobar />
      <Navigation />
      <BannerAbout />
      <BreadcrumbAbout />
      <AboutSection1 />
      <Mission />
      <Valeur />
      <Devis />
      <Engagement />
      <Garanti />
      <Section7 />
    </div>
  )
}

export default About
