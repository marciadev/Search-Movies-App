import {
  ADD_MOVIE_FAVORITE,
  GET_MOVIES,
  REMOVE_MOVIE_FAVORITE,
  GET_MOVIE_DETAIL,
} from "../actions";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_MOVIE_FAVORITE) {
    return {
      ...state,
      moviesFavourites: state.moviesFavourites.concat(action.payload),
    };
  }
  if (action.type === GET_MOVIES) {
    return {
      ...state,
      moviesLoaded: action.payload.Search,
    };                            // es el nombre de la propiedad que me devuelve la API
  }
  if (action.type === REMOVE_MOVIE_FAVORITE) {
    return {
      ...state,
      moviesFavourites: state.moviesFavourites.filter(
        (m) => m.id !== action.payload.m.id
      ),//el filter recibe un argumento
    };
  }
  if (action.type === GET_MOVIE_DETAIL) {
    return {
      ...state,
      movieDetail: action.payload,
    };
  }
  return state;
}

export default rootReducer;
