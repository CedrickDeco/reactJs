import React from 'react';

const Engagement = () => {
  return (
    <div className='enga'>
      <div className="enga-container">
        <div className="left">
          <div className="icon">
            <img src="./assets/img/cooperate.png" alt="cooperate" />
          </div>
        </div>
        <div className="right">
          <div className="right-container">
            <div className="top">
              <div className="title">
                nos engagements
              </div>
            </div>
            <div className="text">
              <ul>
                <li><span><i className="fi fi-rr-arrow-circle-right"></i></span>Contrôler vos produits pendant le processus de fabrication.</li>
                <li><span><i className="fi fi-rr-arrow-circle-right"></i></span>Enlèvement de vos colis à domicile.</li>
                <li><span><i className="fi fi-rr-arrow-circle-right"></i></span>Inspection de vos produits avant embarquement.</li>
                <li><span><i className="fi fi-rr-arrow-circle-right"></i></span>Retrait sécurisé de vos colis à des prix imbattables.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engagement;