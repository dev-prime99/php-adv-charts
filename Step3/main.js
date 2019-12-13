
function getData(){

  $.ajax({

    url: "server.php",
    method: "GET",
    success: function(data){
      printFat(data);
      printFatAgent(data);
      printTeam(data);
    },
    error: function(err){

    }
  });

}

function printFat(data){

  var ctx = document.getElementById('fat').getContext('2d');
  var myChart = new Chart(ctx, {
    type: data["fatturato"]["type"],
    data: {
      labels: moment.months(),
      datasets: [{
        label: 'Vendite',
        data: data["fatturato"]["data"],
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

function printFatAgent(data){

  var nomi = Object.keys(data["fatturato_by_agent"]["data"]);
  var valori = Object.values(data["fatturato_by_agent"]["data"]);
  var ctx = document.getElementById('agent').getContext('2d');
  var myChart = new Chart(ctx, {
    type: data["fatturato_by_agent"]["type"],
    data: {
      datasets: [{
        data: valori,
        backgroundColor: "rgba(255, 255, 0, 1)",
        borderColor: "rgba(255, 0, 0, 1)"
        }],
      labels: nomi
    },
  });

}

function printTeam(data){

  var team = Object.keys(data["team_efficiency"]["data"]);
  var valori = Object.values(data["team_efficiency"]["data"]);
  var ctx = document.getElementById('team').getContext('2d');
  var myChart = new Chart(ctx, {
    type: data["team_efficiency"]["type"],
    data: {
      labels: moment.months(),
      datasets: [{
        label: team[0],
        data: valori[0],
        borderColor: "rgba(0, 0, 255, 1)",
        borderWidth: 2
      }, {
        label: team[1],
        data: valori[1],
        borderColor: "rgba(0, 116, 15, 1)",
        borderWidth: 2
      }, {
        label: team[2],
        data: valori[2],
        borderColor: "rgba(255, 184, 0, 1)",
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
