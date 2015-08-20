import React from "react";
import Router from "react-router";
import routes from "../shared/routes";
import Layout from '../shared/containers/Layout';

React.render(
  <Layout />,
  document.getElementById('app')
);
//Router.run(routes, Router.HistoryLocation, (Handler, state) => {
//  React.render(<Handler />, document.getElementById('app'));
//});