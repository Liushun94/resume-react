import React, { Component } from 'react'

export default class Background extends Component {
  componentDidMount() {
    particlesJS.load('particles-js', '../../config/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
  
  render() {
    return (
      <div id="background">
        
      </div>
    )
  }
}
