export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const GET_MOVIES = "GET_MOVIES";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=45f29839&s=" + titulo)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIES, payload: json });
      });
  };
}

export function getMovieDetail(idMovie) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=45f29839&i=${idMovie}`)
      .then((r) => r.json())
      .then((r) => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: r });
      });
  };
}

export function addMovieFavorite(payload) {
  return { type: ADD_MOVIE_FAVORITE, payload };
}
export function removeMovieFavorite(payload) {
  return { type: REMOVE_MOVIE_FAVORITE, payload };
}
