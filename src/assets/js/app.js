import 'what-input';

//polyfill
import './utils/polyfill';

//modules
// import './modules/CustomScroll';

import 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


// Start chart
var chart = document.getElementById('myChart');
Chart.defaults.global.animation.duration = 2000; // Animation duration
Chart.defaults.global.title.display = false; // Remove title
Chart.defaults.global.title.text = "Chart"; // Title
Chart.defaults.global.legend.labels.fontColor = "white" // Title
Chart.defaults.global.title.position = 'bottom'; // Title position
Chart.defaults.global.defaultFontColor = '#ffffff'; // Font color
Chart.defaults.global.defaultFontSize = 10; // Font size for every label

Chart.defaults.global.tooltips.backgroundColor = '#536c79'; // Tooltips background color
Chart.defaults.global.tooltips.borderColor = 'white'; // Tooltips border color
Chart.defaults.global.tooltips.titleFontSize = 0;
Chart.defaults.global.tooltips.bodyFontSize = 20;
Chart.defaults.global.tooltips.displayColors = false;
Chart.defaults.global.tooltips.titleMarginBottom = 0;
// Chart.defaults.global.tooltips.bodySpacing = 20;
// Chart.defaults.global.tooltips.yPadding = 35;

Chart.defaults.global.legend.labels.padding = 0;
Chart.defaults.global.legend.labels.color = 'white';
Chart.defaults.scale.ticks.beginAtZero = true;
// Chart.defaults.scales.yAxes.ticks.display = 'none';
Chart.defaults.scale.gridLines.zeroLineColor = 'rgba(255, 255, 255, 1)';
Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0)';
Chart.defaults.global.legend.display = false;

var myChart = new Chart(chart, {
  type: 'bar',
  data: {
    labels: ["Аренда", "Жилая", "178-Ф", "169-Ф3", "Доля города"],
    datasets: [{
      // label: "Lost",
      fill: false,
      lineTension: 0,
      data: [35, 46, 32, 14, 4],
      pointBorderColor: "#ffffff",
      borderColor: '#ffffff',
      bgColor: '#ffffff',
      borderWidth: 2,
      // showLine: true,
    }]
  },
  options: {
    scales: {
      xAxes: [{

        // display: false,
        ticks: {
          // display: false
        },
        gridLines: {
          zeroLineColor: '#63c2de'
        }
      }],
      yAxes: [{
        // display: false,
        ticks: {
          display: false
        },
        gridLines: {
          // zeroLineColor: '#ffcc33'
        }
      }]
    }
  }
});


// Start chart
var chart1 = document.getElementById('myChart1');
// Chart.defaults.global.animation.duration = 2000; // Animation duration
// Chart.defaults.global.title.display = false; // Remove title
// Chart.defaults.global.title.text = "Chart"; // Title
// Chart.defaults.global.title.position = 'bottom'; // Title position
// Chart.defaults.global.defaultFontColor = '#999'; // Font color
// Chart.defaults.global.defaultFontSize = 10; // Font size for every label
//
// // Chart.defaults.global.tooltips.backgroundColor = '#FFF'; // Tooltips background color
// Chart.defaults.global.tooltips.borderColor = 'white'; // Tooltips border color
// Chart.defaults.global.legend.labels.padding = 0;
// Chart.defaults.scale.ticks.beginAtZero = true;
// Chart.defaults.scale.gridLines.zeroLineColor = 'rgba(255, 255, 255, 0.1)';
// Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0.02)';
// Chart.defaults.global.legend.display = false;

var myChart1 = new Chart(chart1, {
  plugins: null,
  type: 'bar',
  data: {
    labels: ["Аренда", "Жилая", "178-Ф", "169-Ф3", "Доля города"],
    datasets: [{
      // label: "Lost",
      fill: false,
      lineTension: 0,
      data: [35, 46, 32, 14, 4],
      pointBorderColor: "#ffffff",
      borderColor: '#ffffff',
      bgColor: '#ffffff',
      borderWidth: 2,
      // showLine: true,
    }]
  },
  options: {
    scales: {
      xAxes: [{

        // display: false,
        ticks: {
          // display: false
        },
        gridLines: {
          zeroLineColor: '#63c2de'
        }
      }],
      yAxes: [{
        // display: false,
        ticks: {
          display: false
        },
        gridLines: {
          // zeroLineColor: '#ffcc33'
        }
      }]
    }
  }
});


var chart2 = document.getElementById('myChart2');

var myChart2 = new Chart(chart2, {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: ["Данные-1", "Данные-2", "Данные-3", "Данные-4", "Данные-5", "Данные-6", "Данные-7", "Данные-8"],
    datasets: [{
      // label: "Lost",
      fill: false,
      lineTension: 0,
      data: [80, 66, 32, 44, 20, 56, 12, 74],
      pointBorderColor: "#536c79",
      borderColor: ['#f6b4da', '#92ddea', '#71d086', '#aa7dd4', '#f6b4da', '#92ddea', '#71d086', '#aa7dd4'],
      backgroundColor: ['#f6b4da', '#92ddea', '#71d086', '#aa7dd4', '#f6b4da', '#92ddea', '#71d086', '#aa7dd4'],
      borderWidth: 2,
      // showLine: true,
    }]
  },
  options: {
    plugins: {
      datalabels: {
        anchor: 'top'
      }
    },
    scales: {
      xAxes: [{

        // display: false,
        ticks: {
          // display: false,
          fontColor: '#536c79'
        },
        gridLines: {
          zeroLineColor: '#ffffff',
          color: '#ffffff'
        }
      }],
      yAxes: [{
        // display: false,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: '#ffffff',
          color: '#ffffff'
        }
      }]
    }
  }
});
