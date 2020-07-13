function addRisposta(){
  var risposta = $('.template-risposta > p').clone();
  risposta.addClass('stilerisposta');
  var target = $('.messaggi').append(risposta);
}
function addMessage(){
  var message =$('#barraInvio').val();
  var messaggio = $('.template-messaggio > p').clone();
  messaggio.addClass('stilemessaggio').text(message);
  var target = $('.messaggi').append(messaggio);
}
function pressInvio (){
  if (event.which == 13) {
    addMessage();
    $('#barraInvio').val("");
    setTimeout(function(){
      addRisposta();
    },1000);
  }
}

function init() {
  $(document).keydown(pressInvio);
}
$(document).ready(init);
