import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Formulaire = () => {
  const theForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".form-message")

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      theForm.current,
      process.env.REACT_APP_PRIVATE_KEY
    )
      .then((result) => {
        console.log(result.text);
        theForm.current.reset();
        formMessage.innerHTML = " <p class='success'>Messasge envoyé!</p> "
        setTimeout(() => {
          formMessage.innerHTML = ""
        }, 2500);
      },
        (error) => {
          console.log(error.text);
          formMessage.innerHTML = " <p class='error'>Une erreur s'est produite, veuillez réessayer s'il vous plait!</p> "
          setTimeout(() => {
          formMessage.innerHTML = ""
        }, 2500);
      });
  };

  return (
    <div className="le-formulaire">
      <form className="form-container" ref={theForm} onSubmit={sendEmail}>
        <label>Nom</label>
        <input type="text" name="nom" required autoComplete='off'/>
        <label>Email</label>
        <input type="email" name="email" required/>
        <label>Message</label>
        <textarea name="message" required/>
        <input type="submit" value="Send" />
      </form>
      <div className="form-message">

      </div>
    </div>
  );
};

export default Formulaire;