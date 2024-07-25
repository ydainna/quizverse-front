import api from "../axios/FetchInterceptor";

// insert score
const scoreService = {};

// get all easy scores
scoreService.getAllEasy = () => {
  return api("/scores/easy", {
    // Route is /scores/easy
    method: "GET",
  }).then((res) => res.data); // Return response
};

// get all hard scores
scoreService.getAllHard = () => {
  return api("/scores/hard", {
    // Route is /scores/hard
    method: "GET",
  }).then((res) => res.data); // Return response
};

scoreService.insertEasyScore = (name, score) => {
  return api("/scores/easy", {
    // Route is /scores/easy
    method: "POST",
    data: {
      name: name,
      score: score,
    },
  }).then((res) => res.data); // Return response
};

scoreService.insertHardScore = (name, score) => {
  return api("/scores/hard", {
    // Route is /scores/hard
    method: "POST",
    data: {
      name: name,
      score: score,
    },
  }).then((res) => res.data); // Return response
};

export default scoreService;
