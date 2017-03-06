var React = require('react');
var ReactDOM = require('react-dom');
var MovieContainer = require('./components/MovieContainer');

//only render one component in app
window.onload = function(){
  ReactDOM.render(
    <MovieContainer />,
    document.getElementById('app')
  );
}
