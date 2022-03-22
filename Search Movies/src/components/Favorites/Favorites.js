import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {
  render() {
    return (
      <div className="cnt">
        <h2>Favorite Movies</h2>
        <ul>
          {this.props.movies &&
            this.props.movies.map((m) => {
              return (
                <div key = {m.id}>
                  <Link to={`/movie/${m.id}`}>{m.title}</Link>
                  <button
                    onClick={() => {this.props.removeMovieFavorite({m})}} className="delete-button">X</button>
                </div>
              );
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesFavourites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovieFavorite: (id) => {
      dispatch(removeMovieFavorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
