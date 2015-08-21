import React, { Component, PropTypes } from 'react';
import { AppBar, Styles, FlatButton } from 'material-ui';

var ThemeManager = new Styles.ThemeManager();

export default class Headbar extends Component {
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
        <AppBar
      title="Namelos"
      style={styles}
      >
        <FlatButton label='Button' />
        </AppBar>
    );
  }
};

let styles = {
  background: 'white',
  color: 'black'
};

let buttonStyles = {
  margin: '10px'
};

