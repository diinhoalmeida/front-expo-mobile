import axios from "axios";
import { IP_CONFIG, DB_PORT } from '../config/config'; 

const api = axios.create({
  baseURL: `${IP_CONFIG}:${DB_PORT}`,
});

export default api;