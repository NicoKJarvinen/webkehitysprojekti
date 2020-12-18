import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://recar-rental.herokuapp.com",
  headers: {
    Auth: "Simple AUTH",
  },
  timeout: 3000,
});
