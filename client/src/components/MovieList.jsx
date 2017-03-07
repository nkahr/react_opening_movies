var React = require('react');
var Movie = require('./Movie.jsx')

var MovieList = React.createClass({

  render: function() {

    var movieNodes = this.props.movies.map(function(movie) {
      return (
        <Movie title={movie.title} showtimes={movie.showtimes} key={movie.id}/>
      )
    });

    return (
      <div>
        {movieNodes} 
      </div>
    )
  }
});

module.exports = MovieList;