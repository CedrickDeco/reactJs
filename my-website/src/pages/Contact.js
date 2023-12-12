import React from 'react';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>Rue foche</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <CopyToClipboard text='+237656462080' className="hover">
                <p>+237 656 462 080</p>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;