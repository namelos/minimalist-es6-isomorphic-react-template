import express from "express";
import React from "react";
import Router from "react-router";
const app = express();

app.set('views', './views');
app.set('view engine', 'jade');

import routes from "../shared/routes";
import Location from 'react-router/lib/Location'


app.get('/', function(req, res) {
  res.render('index');
})
// app.get('/*', function(req, res) {
//   var location = new Location(req.url, req.query);

//   Router.run(routes, location, function (error, initialState, transition) {
//     console.log(initialState);
//     var content = React.renderToString(<Router {...initialState}/>);
//     res.render('index', {content: content})
//   })
// });
//app.get('/*', function (req, res) {
//  Router.run(routes, req.url, Handler => {
//    let content = React.renderToString(<Handler />);
//    res.render('index', { content: content });
//  });
//});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
