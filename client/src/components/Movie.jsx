var React = require('react');

var Movie = React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired, 
    showtimes: React.PropTypes.array
  },

  render: function() {

    var showtimeNodes = this.props.showtimes.map(function(showtime) {
      return (
        <p>{showtime}</p>
      )
    });

    return (
      <div> 
        <h4>{this.props.title}</h4> 
        {this.props.showtimes}
      </div>
    )
  }
});

module.exports = Movie;