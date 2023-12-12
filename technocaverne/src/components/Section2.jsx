import React from 'react'
import { NavLink } from "react-router-dom";

const Section2 = () => {
  return (
    <div className='section2'>
      <div className='section2-container'>
        <div className='left'>
          <div className='left-content'>
            {/* <div className='subtitle'>
							des marchandises sûres à des prix défiants toutes
							rivalités
						</div> */}
            <div className='title'>
              pourquoi travailler avec nous{' '}
              <span className='interro'>
                <i className='fa-solid fa-question' />
              </span>
            </div>
            <div className="content">
              <div className="text">
                <ul>
                  <li><span><i className="fi fi-rs-star"></i></span>Notre connaissance des codes des affaires et des langues
                    internationales nous permette de négocier pour vous les
                    meilleurs prix.</li>
                  <li><span><i className="fi fi-rs-star"></i></span>Nos nombreuses années d’expérience dans ces domaines sont à
                    votre service pour trouver les meilleures solutions à tous types
                    de situations.</li>
                  <li><span><i className="fi fi-rs-star"></i></span>Nous savons que les affaires sont une course constante contre
                    la montre. Gagnez du temps avec une équipe réactive et
                    des services efficaces.</li>
                  <li><span><i className="fi fi-rs-star"></i></span>Nous maîtrisons tous les rouages de l&#39;import-export, et toute
                    notre expertise est à votre disposition, quelle que soit la nature
                    ou la quantité de vos besoins.</li>
                </ul>
              </div>
            </div>

            <div className="btn">
              <NavLink
                to='/about'
              >
                lire la suite
              </NavLink>
            </div>

          </div>
        </div>
        <div className='right'>
          <img src="./assets/img/about" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section2
