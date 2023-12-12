import React from 'react'
import Infobar from '../components/Infobar'
// import Mission from '../components/Mission'
// import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
// import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
// import Section5 from '../components/Section5'
import Section6 from '../components/Section6'
import Section7 from '../components/Section7'
import Slider from '../components/Slider'
import Topbar from '../components/Topbar'
// import Valeur from '../components/Valeur'

const Home = () => {
  return (
    <div>
      {/* <Mouse /> */}
      <div className='home'>
        <Topbar />
        <Infobar />
        <Navigation />
        <Slider />
        <Section1 />
        <Section2 />
        <Section4 />
        {/* <Mission />
        <Valeur /> */}
        {/* <Section3 /> */}

        {/* <Section5 /> */}
        <Section6 />
        <Section7 />
      </div>
    </div>
  )
}

export default Home
