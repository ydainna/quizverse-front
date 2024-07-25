import { Player } from "@lottiefiles/react-lottie-player";
import Navbar from "@components/Layout-Components/Navbar/Navbar";
import QuizStart from "@components/Quiz/QuizStart";
import "@assets/css/Quiz.css";
import logo from "@assets/img/logo.png";
import lottieBackground from "@assets/lottie-file/background-quiz.json";

export default function Quiz() {
  return (
    <>
      <Navbar />
      {/* <Player> is a component from the lottiefiles library 
      i using this 'player' for the background animation */}
      <Player
        className="lottie-background"
        autoplay
        loop
        src={lottieBackground}
      />
      <section className="quiz">
        <img src={logo} alt="Quiz" className="logo" />
        <div className="quizContainer">
          <QuizStart />
        </div>
      </section>
    </>
  );
}
