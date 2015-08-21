import React, { Component } from 'react';
import Class from '../utils/Class';
import Headbar from '../components/Headbar';
import Hero from '../components/Hero.js';

export default class Head extends Component {
  render() {
    return (
        <div>
        <Headbar />
        <Hero />
        </div>
    );
  }
};
