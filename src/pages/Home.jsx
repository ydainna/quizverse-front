import LevelButton from "@components/TableScore/LevelButton";
// eslint-disable-next-line no-unused-vars
import "@assets/css/Home.css";
import TableScore from "@components/TableScore/TableScore";
import wild from "@assets/img/wild-logo.png";
import Navbar from "@components/Layout-Components/Navbar/Navbar";
import Footer from "@components/Layout-Components/Footer/Footer";
import logo from "@assets/img/logo-quizverse.svg";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="quiz-header">
        <img src={logo} alt="QuizVerse Logo" className="logo" />
        <h1>Testez vos connaissances du système solaire :</h1>
        <LevelButton />
      </header>
      <div className="scores-table">
        <h2>DERNIERS SCORES</h2>
        <TableScore />
      </div>
      <div className="project">
        <h3>NOTRE PROJET</h3>
        <section className="project-content">
          <div className="project-description">
            <p>
              Notre site est un quiz qui se veut ludique sur les connaissances
              des internautes sur le système solaire.
            </p>

            <p>
              Ce projet a été créé par la formidable équipe de Yohan Rosano,
              Sébastien Artesi, Valentin Dupin, Victoire Michel et Mathieu
              Langlois.
            </p>
          </div>
          <img className="logo-wild" src={wild} alt="wild-logo" />
        </section>
      </div>
      <Footer />
    </>
  );
}
