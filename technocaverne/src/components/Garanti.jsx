import React from 'react';

const Garanti = () => {
  return (
    <div className='garanti'>
      <div className="garanti-container">
        <div className="left">
          <div className="left-container">
            <div className="top">
              <div className="title">
                nos garanties
              </div>
            </div>
            <div className="text">
              <ul>
                <li><span><i className="fi fi-rr-arrow-circle-right"></i></span>Performance et rapidité : chaque étape du processus est soigneusement
                  contrôlée pour tenir compte de tout évènement imprévu.</li>
                <li><span><i className="fi fi-rr-arrow-circle-right"></i></span>Professionnalisme et promptitude de nos équipes : nous travaillons avec
                  une équipe jeune et professionnelle, chacun dans son domaine d&#39;activité
                  et donc en contact permanent pour maintenir les délais de livraison les
                  plus courts possibles.</li>
                <li><span><i className="fi fi-rr-arrow-circle-right"></i></span>Nos différents entrepôts situés au cœur de Bruxelles et de Douala, sont
                  surveillés de manière sécurisé 24H / 24H.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="icon">
            <img src="./assets/img/guarantee.png" alt="guarantee" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garanti;