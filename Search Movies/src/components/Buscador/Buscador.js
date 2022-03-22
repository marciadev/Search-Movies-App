import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Buscador.css";
import { addMovieFavorite, getMovies } from "../../actions";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="cont-box">
        <h2>SEARCH</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Movie:{" "}
            </label>
            <input className="inputs"
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
              
            />
          </div>
          <button type="submit" className="button">GO</button>
        </form>
        <ul >
          {this.props.movies &&
            this.props.movies.map((m) => (
              <li className="list">
                <Link to={`/movie/${m.imdbID}`}>{m.Title}</Link>
                <button className="fav-button" onClick={() => this.props.addMovieFavorite({title: m.Title, id: m.imdbID})}>
                FAV
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

//export default Buscador;
