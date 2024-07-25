import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import Video from "@components/Layout-components/Video/Video";

import "@assets/css/Error.css";

import lottieBackground from "@assets/lottie-file/background-quiz.json";
import satellite from "@assets/lottie-file/satellite-error.json";
import elephant from "@assets/lottie-file/elephant.json";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Error() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [lottieError, setLottieError] = useState(satellite);

  const openModal = () => {
    setIsOpen(true);
    setLottieError(elephant);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Player
        loop
        src={lottieBackground}
        autoplay
        className="lottie-background"
      />
      <section className="error">
        <div className="errorContainer">
          <Player
            className="lottie-error"
            loop
            autoplay
            src={lottieError}
            style={{ height: "300px", width: "300px" }}
          />
          <div
            role="presentation"
            className="errorTitle"
            onClick={openModal}
            onKeyDown={openModal}
          >
            404
          </div>
          <p>Il semblerais que vous êtes tombé dans un trou noir...</p>
          <p>
            pas de panique ! cliquer sur le bouton pour retourner sur la page
            principale
          </p>
          <div className="buttonContainer">
            <Link to="/">
              <button type="button" className="button">
                Accueil
              </button>
            </Link>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          overlayClassName="modal-overlay"
          ariaHideApp={false}
        >
          <Video controls={false} src="./elephant.mp4" autoPlay />
        </Modal>
      </section>
      {/*
        __                 
        '. \  🅷🅴🅻🅻🅾, 🅼🆈 🅽🅰🅼🅴 🅸🆂 🅴🅻🅼🅴🆁 ❗
        '- \               
          / /_         .---.
        / | \\,.\/--.//    )
        |  \//        )/  / 
          \  ' ^ ^    /    )____.----..  6
          '.____.    .___/            \._) 
              .\/.                      )
              '\                       /
              _/ \/    ).        )    (
              /#  .!    |        /\    /
              \  C// #  /'-----''/ #  / 
          .   'C/ |    |    |   |    |mrf  ,
          \), .. .'OOO-'. ..'OOO'OOO-'. ..\(,
      */}
    </>
  );
}
