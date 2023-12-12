import React from 'react'

const Section5 = () => {
  return (
    <div className='section5'>
      <div className='section5-container'>
        <div className='left'>
          <div className='left-container'>
            <div className='top'>
              <div className='title'>contact</div>
            </div>
            <div className='bottom'>
              <div className='address'>
                <div className='adress'>
                  <div className='icon'>
                    <i className='fa-solid fa-location-dot' />
                  </div>
                  <div className='address-text'>
                    <p>
                      Localisation BELIGIQUE : Bergensesteenweg 77,<br /> 1600 Sint-Pieters Leeuw (Bruxelles)
                    </p>
                  </div>
                </div>
                <div className='adress'>
                  <div className='icon'>
                    <i className='fa-solid fa-location-dot' />
                  </div>
                  <div className='address-text'>
                    <p>
                      Localisation CAMEROUN : Douala-Cameroun 1898 Rue Dr Jamot Immeuble MZ après immeuble Equinoxe
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
                    info@technocaverne.be
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='right-container'>
            <div className='top'>
              <div className='title'>envoyer nous un message</div>
              <p>
                TECHNOCAVERNE est toujours à votre écoute et vous repond dans les plus brefs délais
              </p>
            </div>
            <div className='bottom'>
              <div className='form'>
                <form className='form-container'>
                  <div className='top'>
                    <div className='left'>
                      <label>Nom</label>
                      <input
                        type='text'
                        name='nom'
                        required
                        autoComplete='off'
                      />
                      <label>Email</label>
                      <input
                        type='email'
                        name='email'
                        required
                      />
                    </div>
                    <div className='right'>
                      <label>objet</label>
                      <input
                        type='text'
                        name='nom'
                        required
                        autoComplete='off'
                      />
                      <label>téléphone</label>
                      <input
                        type='text'
                        name='nom'
                        required
                        autoComplete='off'
                      />
                    </div>
                  </div>
                  <div className='bottom'>
                    <label>Message</label>
                    <textarea name='message' required />
                    <input type='submit' value='Envoyer' />
                  </div>
                </form>
                <div className='form-message' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5
