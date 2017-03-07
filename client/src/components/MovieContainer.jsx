var React = require('react');
var MovieList = require("./MovieList.jsx");

var movieData = [
  {id: 1, title: "Sausage Party", showtimes:["19.30", "21.30"]}, 
  {id: 2, title: "Cafe Society", showtimes:["19.30", "21.30"]}
];
var MovieContainer = React.createClass({
  getInitialState: function() {
    return {data: movieData}
  },

  render: function() {
    return (
      <div className="movie-list">
        <MovieList movies={this.state.data} /> 
      </div>
    )
  }
});

module.exports = MovieContainer;