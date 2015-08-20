import React, { Component } from 'react'

var Class = function(xml) {
  return class extends Component {
    render() {
      return xml
    }
  }
};

export default Class