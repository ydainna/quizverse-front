import React from "react";
import planet from "@assets/img/planet.png";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ContactForm.css";

function ContactForm() {
  const notify = () => toast("Votre message a bien été envoyé !");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9732ss8",
      "template_3usisll",
      e.target,
      "tVjSsWVer-z-UI8tR"
    );
  };

  return (
    <div className="container">
      <form onSubmit={sendEmail} className="form-box">
        <span>
          <h1 className="title-contact">Contactez-nous</h1>
          <img className="img-alien" src={planet} alt="Visage_Alien" />
        </span>

        <div>
          <label htmlFor="name">Nom</label>
          <input type="text" name="user_name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" />
        </div>
        <button
          type="submit"
          className="buttonSubmit"
          value="Send"
          onClick={() => {
            notify();
          }}
        >
          Envoyer
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactForm;
