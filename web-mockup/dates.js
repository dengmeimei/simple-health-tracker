function getDateString() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd='0'+dd
  }

  if(mm<10) {
      mm='0'+mm
  }

  var today = yyyy + "-" + mm + "-" + dd;
  return today;
}

function getTimeString() {
  var today = new Date();
  var dd = today.getHours();
  var mm = today.getMinutes();
  return dd + ":" + mm;
}

$(function() {
	$('.date').val(getDateString());
	$('.time').val(getTimeString());
});