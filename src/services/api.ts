import axios from "axios";

const apiAuth = axios.create({
  baseURL: "https://g2authenticator-qa4.copart.com.br/services",
});

const api = axios.create({
  baseURL: "https://g2wservices-qa4.copart.com.br",
});

export { api, apiAuth };
