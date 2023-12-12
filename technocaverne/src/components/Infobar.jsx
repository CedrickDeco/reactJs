import React from 'react'
import { NavLink } from 'react-router-dom'

const Infobar = () => {
  return (
    <div>
      <div className='info-bar'>
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
              <div className='text-1'>import-export,</div>
              <div className='text-2'>
                it trade-storage-shipping
              </div>
            </div>
          </div>
        </div>
        <div className='infos'>
          <div className='mobile'>
            <div className='mobile-icone'>
              {/* <i className='fa-regular fa-mobile-screen' /> */}
              <i className='fa-solid fa-mobile-screen' />
            </div>
            <div className="mobile-title"><p>BELGIQUE</p></div>
            <div className='mobile-content'>
              <div className='mobile-content-1'>
                (+32) 485 175 803
              </div>
              <div className='mobile-content-2'>
                (+32) 472 395 524
              </div>
            </div>
          </div>
          <div className='office'>
            <div className='office-icone'>
              <i className='fa-solid fa-phone' />
            </div>
            <div className="office-title"><p>CAMEROUN</p></div>
            <div className='office-content'>
              <div className='mobile-content-1'>
                (+237) 233 425 345
              </div>
              <div className='office-content-2'>
                (+237) 658 970 514
              </div>
            </div>
          </div>
          <div className='email'>
            <div className='email-icone'>
              <i className='fa-regular fa-envelope' />
            </div>
            <div className='email-content'>
              <div className='mobile-content-1'>
                info@technocaverne.be
              </div>
              <div className='email-content-2'>
                <NavLink
                  to='/contact'
                  className='btn'
                >
                  <p>Contactez-nous</p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className='hour'>
            <div className='hour-icone'>
              <i className='fa-regular fa-clock' />
            </div>
            <div className='hour-content'>
              <div className='hour-content-1'>
                Lun-Ven 08h:00  - 17h:00
              </div>
              <div className='hour-content-2'>
                Sam 08h:00 - 13h:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Infobar
