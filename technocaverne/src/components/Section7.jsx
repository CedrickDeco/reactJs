import React from 'react'
import { NavLink } from 'react-router-dom'

const Section7 = () => {
  return (
    <div className='section7'>
      <div className='section7-container'>
        <div className='prefooter'>
          <div className='prefooter-container'>
            <div className='block1'>
              <div className='block1-container'>
                <div className='top'>
                  <div className='logo'>
                    <div className='round-logo'>
                      <img
                        className='round-logo'
                        src='./assets/img/round-logo.png'
                        alt='logo'
                      />
                    </div>
                    <div className='text-logo'>
                      <p>
                        techn<span>
                          <i className='fa-solid fa-earth-africa' />
                        </span>
                        caverne
                      </p>
                      <div className='sous-titre'>
                        <div className='text-1'>
                          import-export,
                        </div>
                        <div className='text-2'>
                          it trade-storage-shipping
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bottom'>
                  <div className='slogan'>
                    <p>
                      <span>technocaverne</span>  propose des services  logistiques de haut niveau efficaces et fiables à des coûts ultra compétitifs face à une clientèle de plus en plus exigeante. Pour chaque projet d'envergure, comptez sur notre savoir faire comme partenaire complet de votre chaîne d’approvisionnement !
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className='block2'>
              <div className='block2-container'>
                <div className='title'>contacts</div>
                <div className="theBottom">
                  <div className='bottom'>
                    <div className='adresses'>
                      <div className='address'>
                        <div className='icon'>
                          <i className='fa-solid fa-location-dot' />
                        </div>
                        <div className="text">belgique</div>
                        <div className='lines'>
                          <p className='line1'>
                            Bruxelles Bergensesteenweg 77,
                          </p>
                          <p className='line2'>
                            1600 Sint-Pieters Leeuw
                          </p>
                        </div>
                      </div>
                      <div className='address'>
                        <div className='icon'>
                          <i className='fa-solid fa-location-dot' />
                        </div>
                        <div className="text">cameroun</div>
                        <div className='lines'>
                          <p className='line1'>
                            Douala-Cameroun,
                          </p>
                          <p className='line2'>
                            1898 Rue Dr Jamot Immeuble MZ après immeuble Equinoxe
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='phones-numbers'>
                      <div className='mobile-number'>
                        <div className='icon'>
                          <i className='fa-solid fa-mobile-screen' />
                        </div>
                        <div className="text">belgique</div>
                        <div className='number'>
                          <p className='number1'>
                            (+32) 485 175 803
                          </p>
                          <p className='number2'>
                            (+32) 472 395 524
                          </p>
                        </div>
                      </div>
                      <div className='office-number'>
                        <div className='icon'>
                          <i className='fa-solid fa-phone' />
                        </div>
                        <div className="text">cameroun</div>
                        <div className='number'>
                          <p className='number1'>
                            (+237) 233 425 345
                          </p>
                          <p className='number2'>
                            (+237) 658 970 514
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='email'>
                      <div className='icon'>
                        <i className='fa-solid fa-envelope' />
                      </div>
                      <div className='email-text'>
                        <p>
                          <a href="mailto:info@technocaverne.be">info@technocaverne.be</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='block3'>
              <div className='block3-container'>
                <div className='top'>
                  <div className='title'>menu</div>
                </div>
                <div className='bottom'>
                  <ul>
                    <NavLink
                      to='/'
                      className={nav => (nav.isActive ? 'nav-active' : '')}
                    >
                      <li>accueil</li>
                    </NavLink>
                    <NavLink
                      to='/about'
                      className={nav => (nav.isActive ? 'nav-active' : '')}
                    >
                      <li>qui sommes-nous</li>
                    </NavLink>
                    <NavLink
                      to='/services'
                      className={nav => (nav.isActive ? 'nav-active' : '')}
                    >
                      <li>notre savoir faire</li>
                    </NavLink>
                    <NavLink
                      to='/gallerie'
                      className={nav => (nav.isActive ? 'nav-active' : '')}
                    >
                      <li>gallerie</li>
                    </NavLink>
                    <NavLink
                      to='/contact'
                      className={nav => (nav.isActive ? 'nav-active' : '')}
                    >
                      <li>contact</li>
                    </NavLink>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div className='footer-text'>
            <p>
              <span>technocaverne</span> <i className="fa-regular fa-copyright"></i> 2023 created by <span className='name'>Cedrick TIAKO.</span>  Développeur Web.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7
