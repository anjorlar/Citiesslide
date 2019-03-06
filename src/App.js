import React, { Component } from 'react';
import './App.css';
import Testimonial from './component/testimonial/Testimonial.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Cities Slider</h1>
        <Testimonial />

      </div>
    );
  }
}

export default App;
