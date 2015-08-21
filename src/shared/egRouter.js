import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import { histroy } from 'react-router/lib/HashHistory';

class App extends Component {
  render() {
    return (
        <div>
            <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>

            {this.props.children}
        </div>
    );
  }
}

React.render(
    <Router history={history}>
        <Route path='/' component={App}>
            <Route path='about' component={About} />
            <Route path='inbox' component={Inbox} />
        </Route>
    </Router>,
  document.body
);
