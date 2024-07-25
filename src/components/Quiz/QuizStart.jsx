import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";
import "@assets/css/Quiz.css";
import astronaut from "@assets/lottie-file/astronaut-quiz.json";
import QuizQuestion from "./QuizQuestion";

export default function QuizStart() {
  const [difficulty, setDifficulty] = useState();

  return (
    <>
      {!difficulty && (
        <>
          {/* <Player> is a component from the lottiefiles library
          i using this 'player' for the picture animation */}
          <Player
            autoplay
            loop
            src={astronaut}
            style={{ height: "300px", width: "300px" }}
          />
          <p>Hello aventurier de l'espace</p>
          <p>Choisissez votre difficulté</p>
          <div className="buttonContainer">
            <button
              onClick={() => setDifficulty("easy")}
              type="submit"
              className="buttonDifficulty"
            >
              Facile
            </button>
            <button
              onClick={() => setDifficulty("hard")}
              type="button"
              className="buttonDifficulty"
            >
              Difficile
            </button>
          </div>
        </>
      )}
      {difficulty === "easy" && <QuizQuestion difficulty={difficulty} />}
      {difficulty === "hard" && <QuizQuestion difficulty={difficulty} />}
    </>
  );
}
