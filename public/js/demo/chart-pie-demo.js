setTimeout(function(){
  // Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
let bs = localStorage.getItem('bs');
let id = localStorage.getItem('id');
let dp = localStorage.getItem('dp');
let dm = localStorage.getItem('dm');
let cp = localStorage.getItem('cp');
var myPieChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: [["Business Strategy", `${bs}/12`],
    ["Internal Digitalization", `${id}/16`],
    ["Digital Products", `${dp}/28`],
    ["Data Management", `${dm}/32`]
    ,["Content_Production", `${cp}/12`]],
    datasets: [{
      data: [Math.ceil((bs/12)*100),Math.ceil((id/16)*100),Math.ceil((dp/28)*100),Math.ceil((dm/32)*100), Math.ceil((cp/12)*100)],
      backgroundColor: 'rgba(43, 36, 183, 0.52)',
      hoverBackgroundColor: 'blue',
      pointHoverBackgroundColor: '',
      hoverBorderColor: "rgba(234, 236, 244, 1)" 
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      enabled: false,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
    scale: {
      angleLines: {
          display: false
      },
      ticks: {
          suggestedMin: 3,
          suggestedMax: 100,
          maxTicksLimit: 5,
          display: false,
          stepSize: 5
      }
  }
  },
});

}, 1000)