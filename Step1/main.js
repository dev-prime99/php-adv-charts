
function getData(){

  $.ajax({

    url: "server.php",
    method: "GET",
    success: function(data){
      printData(data)
    },
    error: function(err){

    }
  });

}

function printData(data){

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: moment.months(),
      datasets: [{
        label: 'Vendite',
        data: data,
        backgroundColor: "rgba(0, 116, 15, 1)",
        borderColor: "rgba(255, 0, 0, 1)",
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}

function init() {
  getData();
}

$(document).ready(init);
