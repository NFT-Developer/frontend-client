import CanvasJSReact from '../lib/canvasjs/canvasjs.react';
// var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
  animationEnabled: true,
  backgroundColor: 'transparent',
  axisY: {
    title: "Price",
  },
  axisX: {
    interval: 2
  },
  data: [{
    type: "line",
    toolTipContent: "Week {x}: {y}%",
    dataPoints: [
      { x: 1, y: 64 },
      { x: 1, y: 3 }
    ]
  }]
}

export default function LineChart() {
   return (
      <div>
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
}