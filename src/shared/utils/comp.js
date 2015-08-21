import React, { Component, PropTypes, createElement } from 'react';
import mui, { Styles } from 'material-ui';

var ThemeManager = new Styles.ThemeManager();

var comp = function(Tag, prop) {
  return class extends Component {
    static get childContextTypes() {
      return {
        muiTheme: PropTypes.object
      };
    }

    getChildContext() {
      return {
        muiTheme: ThemeManager.getCurrentTheme()
      };
    }

    render() {
      return (
          createElement(Tag, prop)
      );
    }
  };
};

export default comp;
