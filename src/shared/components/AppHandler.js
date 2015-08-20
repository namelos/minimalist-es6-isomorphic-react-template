import React from "react";
import comp from '../utils/comp'
import { RaisedButton, AppBar } from 'material-ui'

var AppHandler = comp(AppBar, {style: {background: '#FFF'}});
export default AppHandler

//export default class AppHandler extends React.Component {
//  render() {
//    return <div>Hello App Handler</div>;
//  }
//};
