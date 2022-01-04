var alertList = document.querySelectorAll('.alert')
alertList.forEach(function (alert) {
  new bootstrap.Alert(alert)
})

var myAlert = document.getElementById('myAlert')
var bsAlert = new bootstrap.Alert(myAlert)