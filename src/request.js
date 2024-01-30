const key = "f40dddebcf4614f5d5b6e80ac4fd3f5b";

const requests = {
  requestNew: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=3`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestCompare: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=2`,
  requestSpotlight: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=3`,
  requestWatchAgain: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=5`,
  requestRandom: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=4`,
};

export default requests;
