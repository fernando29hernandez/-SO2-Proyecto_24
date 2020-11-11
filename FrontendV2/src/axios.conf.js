import axios from "axios";

export default axios.create({
  baseURL: "http://104.197.150.56:3000/api",
  headers: {
    "Content-type": "application/json"
  }
});
