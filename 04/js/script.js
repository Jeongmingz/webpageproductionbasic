// Basic Format "Chart.js"
// const myChart = new Chart("myChart", {
//   type: "bar",
//   data: {},
//   options: {}
// })


const  xValues = ["Italy","France","Spain","USA","Argentina"];
const  yValues = [55,49,44,24,15];
const  barColors = ["red","green","blue","orange","brown"];

new Chart('myChart', {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {
      display:  false
    },        
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:  true
        }
      }],
    }
  }
})
