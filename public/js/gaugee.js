setTimeout(function(){
  var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.2, // The line thickness
    radiusScale: 0.89, // Relative radius
    pointer: {
      length: 0.54, // // Relative to gauge radius
      strokeWidth: 0.053, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    staticZones: [
        {strokeStyle: "#E74A3B", min: 0, max: 45}, // Red from 100 to 60
        {strokeStyle: "#F6C23E", min: 45, max: 80}, // Yellow
        {strokeStyle: "#1CC88A", min: 80, max: 100}, // Green
     ],
    
  };
  var target = document.getElementById('foo'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  let ClientTotal = localStorage.getItem('Total');
  gauge.maxValue = 100; // set max gauge value
  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 50; // set animation speed (32 is default value)
  gauge.set(ClientTotal); // set actual value
}, 1000)