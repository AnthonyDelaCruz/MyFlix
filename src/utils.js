import axios from "axios";

export const fetchMoveApi = async (path) => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${path}`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: "en-US",
      },
    });

    return res.data.results;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};
