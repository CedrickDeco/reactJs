import React from 'react';

const Mission = () => {
  return (
    <div className='mission'>
      <div className="mission-container">
        <div className="left">
          <div className="icon">
            <img src="./assets/img/mountain.png" alt="mountain" />
          </div>
        </div>
        <div className="right">
          <div className="right-container">
            <div className="top">
              <div className="title">
                nos missions
              </div>
            </div>
            <div className="text">
              <ul>
                <li><span><i className="fi fi-rr-arrow-circle-right"></i></span>Proposer des produits qui répondent à un besoin clair.</li>
                <li><span><i className="fi fi-rr-arrow-circle-right"></i></span>Proposer de nouvelles méthodes d&#39;expédition de colis pour répondre au
                  mieux aux besoins actuels et variés des clients cibles.</li>
                <li><span><i className="fi fi-rr-arrow-circle-right"></i></span>Respecter les délais de livraison convenus dans le cahier de charge.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Mission;