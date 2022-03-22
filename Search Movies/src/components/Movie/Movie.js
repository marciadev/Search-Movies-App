import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.id; //captura el Id de la URL
    this.props.getMovieDetail(movieId);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">
          <b>Title: {this.props.movieDetail.Title}</b>
        </h1>
        <hr />
        <h4 className="year">Year: {this.props.movieDetail.Year}</h4>
        <p className="description">Plot: {this.props.movieDetail.Plot}</p>
        <div className="cont-img">
          <h6>Genre: {this.props.movieDetail.Genre}</h6>
          <p>Characters: {this.props.movieDetail.Actors}</p>
          <img
            className="img"
            src={this.props.movieDetail.Poster}
            alt={"movie poster"}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetail, //quiero acceder solo al estado movieDetail
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
