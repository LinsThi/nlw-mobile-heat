import axios from "axios";

const IP = "";

export const api = axios.create({
  baseURL: `http://${IP}:4000`,
});
