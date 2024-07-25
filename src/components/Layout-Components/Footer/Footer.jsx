import "./Footer.css";
import planete from "@assets/img/Planets.svg";
import facebook from "@assets/img/Facebook.svg";
import insta from "@assets/img/Instagramme.svg";
import twitter from "@assets/img/Twitter.svg";
import QR from "@assets/img/LogoQR.svg";

function Footer() {
  return (
    <div className="footer">
      <img className="Imageplanets" src={planete} alt="Image_Planetes" />

      <div className="bas">
        <div className="reseaux">
          <h5 className="titleR">Follow Us </h5>
          <div className="img-logo">
            <img className="img" src={insta} alt="Logo_Instagramme" />
            <img className="img" src={facebook} alt="Logo_FaceBook" />
            <img className="img" src={twitter} alt="Logo_Twitter" />
          </div>
        </div>

        <img className="QV" src={QR} alt="Logo_QV" />

        <div className="contactUs">
          <a className="liens" href="../../../pages/Home">
            Contact Us{" "}
          </a>
          <p className="Mention"> Mentions légales</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
