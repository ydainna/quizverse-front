import axios from "axios";

import { API_BASE_URL } from "./AppConfig";

//Create a new axios instance
const service = axios.create({
  baseURL: API_BASE_URL, //API url
});

//export service
export default service;
