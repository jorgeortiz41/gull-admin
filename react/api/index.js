import axios from "axios";

const url = 'http://localhost:5000/logs/';

export const fetchLogs = () => axios.get(url);