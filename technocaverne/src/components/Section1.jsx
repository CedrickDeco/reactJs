import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Section1 = () => {

  const navigate = useNavigate();

  const handleRead = () => {
    navigate("/services#service1");
  };

  return (
    <div className='section-1'>
      <div className='card-container'>
        <div className='card'>
          <div className='card-body'>
            <div className='card-top'>
              <img src='./assets/img/i6.jpeg' alt='card1-tof' />
            </div>
            <div className='card-bottom'>
              <div className='icon'>
                <i className="fi fi-rr-cart-arrow-down"></i>
              </div>
              <div className='text'>
                <div className='title'>centrale d'achat</div>
                <p>
                  Grâce à notre implantation locale et nos relations privilégiées avec les meilleurs sites de e-commerce, des usines d’Europe et d’ASIE...
                </p>
              </div>
            </div>
            <NavLink
              to='services'
              className='btn'
            >
              <p onClick={handleRead} >lire la suite</p>
            </NavLink>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <div className='card-top'>
              <img src='./assets/img/i2.jpeg' alt='card1-tof' />
            </div>
            <div className='card-bottom'>
              <div className='icon'>
                <i className="fi fi-rr-box-open"></i>
              </div>
              <div className='text'>
                <div className='title'>entreposage</div>
                <p>
                  Les produits de l’entreprise doivent ètre Stockés avant expédition. Grace à nos services, vos marchandises sont protégées en attendant...
                </p>
              </div>
            </div>
            <NavLink
              to='/services'
              className='btn'
            >
              <p>lire la suite</p>
            </NavLink>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <div className='card-top'>
              <img src='./assets/img/i10.jpeg' alt='card1-tof' />
            </div>
            <div className='card-bottom'>
              <div className='icon'>
                <i className="fi fi-rs-truck-moving"></i>
              </div>
              <div className='text'>
                <div className='title'>service logistique</div>
                <p>
                  Pour vous garantir un devis compétitif, nous mettons à votre disposition un accompagnement complet incluant le conditionnement...
                </p>
              </div>
            </div>
            <NavLink
              to='/services'
              className='btn'
            >
              <p>lire la suite</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
