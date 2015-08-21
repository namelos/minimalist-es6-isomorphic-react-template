import React, { Component, PropTypes } from 'react';
import { Paper, Styles } from 'material-ui';

var ThemeManager = new Styles.ThemeManager();

export default class Hero extends Component {
  componentDidMount() {
    var canvas = React.findDOMNode(this.refs.canvas);
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = 400;

    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#999';

    for(var i = 18.5; i <= canvas.height; i = i + 20) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.closePath();
      ctx.stroke();
    }

    for(var j = 0.5; j <= canvas.width; j = j + 20) {
      ctx.beginPath();
      ctx.moveTo(j, 0);
      ctx.lineTo(j, canvas.height);
      ctx.closePath();
      ctx.stroke();
    }
  }

  render() {
    return (
        <canvas ref="canvas" height="400" />
    );
  }
};

        function drawGridLines(cnv, lineOptions) {


            var iWidth = cnv.width;
            var iHeight = cnv.height;

            var ctx = cnv.getContext('2d');

            ctx.strokeStyle = lineOptions.color;
            ctx.strokeWidth = 1;

            ctx.beginPath();

            var iCount = null;
            var i = null;
            var x = null;
            var y = null;

            iCount = Math.floor(iWidth / lineOptions.separation);

            for (i = 1; i <= iCount; i++) {
                x = (i * lineOptions.separation);
                ctx.moveTo(x, 0);
                ctx.lineTo(x, iHeight);
                ctx.stroke();
            }


            iCount = Math.floor(iHeight / lineOptions.separation);

            for (i = 1; i <= iCount; i++) {
                y = (i * lineOptions.separation);
                ctx.moveTo(0, y);
                ctx.lineTo(iWidth, y);
                ctx.stroke();
            }

            ctx.closePath();

            return;
        }
