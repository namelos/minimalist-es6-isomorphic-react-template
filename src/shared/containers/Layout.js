import React, { Component } from 'react';
import Class from '../utils/Class';
import Head from './Head';

export default class Layout extends Component {
  componentWillMount() {
    document.body.style.margin = 0;
  }
  componentWillUnmount() {
    document.body.style.margin = null;
  }
  render() {
    return (
      <Head />
    );
  }
}
