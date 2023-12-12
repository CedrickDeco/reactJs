import React from 'react';

const Valeur = () => {
  return (
    <div className='valeur'>
      <div className="valeur-container">
        <div className="left">
          <div className="left-container">
            <div className="top">
              <div className="title">
                nos valeurs
              </div>
            </div>
            <div className="text">
              <ul>
                <li><span><i className="fi fi-rr-arrow-circle-right"></i></span>Confiance : Nous garantissons que nos collaborateurs feront ce qu&#39;ils
                  souhaitent faire selon leur potentiel et dans le cadre de leur travail.</li>
                <li><span><i className="fi fi-rr-arrow-circle-right"></i></span>Ouverture d&#39;esprit : Nous sommes totalement ouverts à toute idée susceptible
                  d&#39;améliorer nos conditions de travail et la qualité des services que nous
                  proposons.</li>
                <li><span><i className="fi fi-rr-arrow-circle-right"></i></span>Enthousiasme : Nous avons une envie constante d&#39;apprendre et gardons
                  toujours un esprit positif car cela nous met dans une bonne humeur
                  contagieuse.</li>
                <li><span><i className="fi fi-rr-arrow-circle-right"></i></span>Professionnalisme : Nous prévoyons de travailler correctement et d&#39;essayer de
                  résoudre les problèmes et les défis auxquels nous serons confrontés.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="icon">
            <img src="./assets/img/value.png" alt="value" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valeur;