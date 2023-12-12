import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
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
    <div className="form-container">
      <h2>contactez-nous</h2>
      <form className="form-content" ref={theForm} onSubmit={sendEmail}>
        <label>Nom</label>
        <input type="text" name="nom" required autoComplete='off' id="name"/>
        <label>Email</label>
        <input type="email" name="email" required id="email"/>
        <label>Message</label>
        <textarea name="message" required id="mess"/>
        <input type="submit" value="Send" className= "hover button" />
      </form>
      <div className="form-message">

      </div>
    </div>
  );
};

export default ContactForm;