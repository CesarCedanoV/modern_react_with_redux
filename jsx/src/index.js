import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
    <label classs="label" for="name"> Enter name:</label>
    <input id="name" type="type"/>
    <button style={{backgroundColor:'blue', color:'white'}}>Submit</button>
  </div>
  );
};

ReactDOM.render(
  <App />, 
  document.querySelector('#root')
)