import Axios from "axios";

// Next we make an 'instance' of it
const axios = Axios.create({
  // .. where we make our configurations
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.apiKey,
  },
});

//axios.defaults.params["api_key"] = process.env.apiKey;

export default axios;
