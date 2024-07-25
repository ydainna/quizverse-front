import ContactAbout from "@components/ContactForm/ContactAbout";
import ContactForm from "@components/ContactForm/ContactForm";
import Navbar from "@components/Layout-Components/Navbar/Navbar";
import Footer from "@components/Layout-Components/Footer/Footer";

import React from "react";

import "@assets/css/Contact.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contactbox">
        <div className="contactForm">
          <ContactForm />
        </div>

        <div className="contactText">
          <ContactAbout />
        </div>
      </div>
      <Footer />
    </>
  );
}
