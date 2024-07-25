import api from "./../axios/FetchInterceptor";

//insert question
const questionService = {};

//get all easy questions
questionService.getEsyQuestions = () => {
  return api("/questions/easy", {
    //Route is /questions/easy
    method: "GET",
  }).then((res) => res.data); //Return response
};

//get all hard questions
questionService.getHardQuestions = () => {
  return api("/questions/hard", {
    //Route is /questions/hard
    method: "GET",
  }).then((res) => res.data); //Return response
};

export default questionService;
