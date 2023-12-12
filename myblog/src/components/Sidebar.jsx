import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="about-section">
          <div className="about-title">
            About me
          </div>
          <div className="about-image">
            <img src="./assets/img/decologo.png" alt="le logo" />
          </div>
        </div>
        <div className="bottom-section">
          <div className="description-block">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae pariatur et fugiat quos modi quasi, autem voluptatum! Provident quaerat beatae dignissimos voluptate at asperiores ad numquam nobis praesentium iure. Laborum necessitatibus, iste laudantium cupiditate dignissimos magni natus sint? Non, ex dicta! Dicta voluptatum accusantium, architecto eaque molestiae ipsum cum pariatur?</p>
          </div>
          <div className="categorie-block">
            <div className="categorie-title">
              categories
            </div>
            <div className="categories-list">
              <div className="left">
                <ul>
                  <li>life</li>
                  <li>sport</li>
                  <li>tech</li>
                </ul>
              </div>
              <div className="right">
                <ul>
                  <li>music</li>
                  <li>style</li>
                  <li>cinema</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="social-media-block">
            <div className="social-title">
              follow us
            </div>
            <div className="social-media">
              <div className="social">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="social">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="social">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="social">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;