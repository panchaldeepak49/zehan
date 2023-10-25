import axios from "axios";

//const url = "https://okomo.onrender.com";               //temporary
const url = "http://localhost:5000";

const BASE_URL = url;



export const userRequest = axios.create({
    baseURL: BASE_URL,
    //headers: {
     // "Content-Type": "application/json",
    //   Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
    // },
  });