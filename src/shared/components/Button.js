import React, { Component, PropTypes, createElement } from 'react';
import mui, { Styles, Button } from 'material-ui';

var ThemeManager = new Styles.ThemeManager();

export default class Button extends Component {
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
            <Button />
        );
    }
};


export default comp;

