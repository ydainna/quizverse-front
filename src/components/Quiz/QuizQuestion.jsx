import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import questionService from "@services/QuestionService";
import scoreService from "@services/ScoreService";
import astronautScore from "@assets/lottie-file/astronaut-score.json";
import Loader from "@components/Layout-Components/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

import { API_BASE_URL } from "../../axios/AppConfig";
import "@components/Quiz/QuizQuestion.css";

export default function QuizQuestion({ difficulty }) {
  const [question, setQuestion] = useState(undefined);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [ShowResult, setShowResult] = useState(false);
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (difficulty === "easy") {
      questionService.getEsyQuestions().then((response) => {
        setQuestion(response);
      });
    } else if (difficulty === "hard") {
      questionService.getHardQuestions().then((response) => {
        setQuestion(response);
      });
    }
  }, [difficulty]);

  async function addScoreEasy() {
    if (difficulty !== "easy") {
      await scoreService.insertHardScore(name, score).then((response) => {
        setQuestion(response);
      });
    } else {
      await scoreService.insertEasyScore(name, score).then((response) => {
        setQuestion(response);
      });
    }
  }

  const notifySubmit = () => {
    if (name.length <= 20 && name.length >= 3) {
      toast(`Votre score a bien été enregistré`);
    } else {
      toast.error(`Votre pseudo doit comporter de 3 à 20 caractères.`);
    }
  };

  const notify = (isCorrect, desc) => {
    if (isCorrect) {
      toast.success(
        <div>
          <p id="answerText">Bravo ! La réponse est correcte !</p>
          <p id="answerText">{desc}</p>
        </div>,
        {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Zoom,
        }
      );
    } else {
      toast.error(
        <div>
          <p id="answerText">Dommage ! La réponse est incorrecte !</p>
          <p id="answerText">{desc}</p>
        </div>,
        {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Zoom,
        }
      );
    }
  };

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (questionIndex + 1 < question.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {ShowResult ? (
        <>
          {/* <Player> is a component from the lottiefiles library
          i using this 'player' for the picture animation */}
          <Player
            autoplay
            loop
            src={astronautScore} // <- or not book
            style={{ height: "150px", width: "150px" }}
          />
          <p className="score">Votre score</p>
          <p className="score">{score} / 10</p>
          <div className="inputClass">
            <input
              onChange={handleChange}
              className="inputName"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="buttonScoreContainer">
            <button
              type="submit"
              className="buttonSubmit"
              onClick={() => {
                addScoreEasy();
                notifySubmit();
              }}
            >
              Envoyer
            </button>
            <ToastContainer />
            <button type="submit" className="buttonScore" onClick={refreshPage}>
              Retry
            </button>
          </div>
        </>
      ) : (
        <>
          {!question && (
            <div>
              <Loader />
            </div>
          )}
          {question && (
            <>
              <Player
                autoplay
                loop
                src={`${API_BASE_URL}/lottie/${question[questionIndex].lottie}`}
                style={{ height: "150px", width: "150px" }}
              />
              <p>{question[questionIndex].quest}</p>
              <div className="buttonAnswerContainer">
                {question[questionIndex].answers.map((answer) => (
                  <button
                    type="submit"
                    className="answerButton"
                    key={answer.id}
                    onClick={() => {
                      notify(
                        answer.isCorrect,
                        question[questionIndex].description,
                        answer.isCorrect
                      );
                      handleClick(answer.isCorrect);
                    }}
                  >
                    {answer.name}
                  </button>
                ))}
              </div>
              <ToastContainer newestOnTop />
              <p>{questionIndex + 1}/10</p>
              <p>Mon score : {score}</p>
            </>
          )}
        </>
      )}
    </>
  );
}
