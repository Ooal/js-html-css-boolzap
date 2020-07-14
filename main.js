/*ricerca user*/
 function ricercaPerNome(){
  var x;
  var testo;
  var input = document.getElementById("barraRicerca");
  var valore = document.getElementById('barraRicerca').value;
  var filtro = input.value.toUpperCase();
  var lista = document.getElementById("contatti");
  var classi =lista.getElementsByClassName("contatto");
  var voci = lista.getElementsByTagName("h4");
  for (i = 0; i < voci.length; i++) {
    x = lista.getElementsByTagName("h4")[i];
    testo = x.textContent || x.innerText;
    if (testo.toUpperCase().indexOf(filtro) > -1) {
      classi[i].style.display = "";
    } else {
      classi[i].style.display = "none";
    }
  }
 }
/*ricerca user*/


/*invio e ricezioni messaggi*/
function addRisposta(){
  var risposta = $('.template-risposta > #template').clone();
  risposta.addClass('stilerisposta');
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes();
  risposta.find('#message-time').text(time);
  var target = $('.messaggi.active').append(risposta);
}
function addMessage(){
  var message =$('#barraInvio').val();
  if (message) {
  var messaggio = $('.template-messaggio > #template').clone();
  messaggio.addClass('stilemessaggio');
  messaggio.find('#message-text').text(message);
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes();
  messaggio.find('#message-time').text(time);
  var target = $('.messaggi.active').append(messaggio);
  }
}
function addMyLastMessage(){
  var message =$('#barraInvio').val();
  if (message) {
  if (message.length > 20){
    var arrayMessaggioAbbrevviato =[];
  for (var i = 0; i < 20; i++) {
    arrayMessaggioAbbrevviato.push(message[i]);
  }
    console.log( arrayMessaggioAbbrevviato);
    var messaggioAbbrevviato = arrayMessaggioAbbrevviato.join('');
    var ultimoMex = $('.template-ultimo-messaggio > p').clone();
    ultimoMex.text(messaggioAbbrevviato + '...');
    var targetUltimoMex = $('.contatto.active > .dati-interlocutore > .ultimo-messaggio').append(ultimoMex)
  } else {
    var ultimoMex = $('.template-ultimo-messaggio > p').clone();
    ultimoMex.text(message);
    var targetUltimoMex = $('.contatto.active > .dati-interlocutore > .ultimo-messaggio').append(ultimoMex);
  }
  }
}
function pressInvioMsg (){
  if (event.which == 13) {
    if (($('.contatto.active > .dati-interlocutore > .ultimo-messaggio >p').length > 0)) {
      $('.contatto.active > .dati-interlocutore > .ultimo-messaggio > p').remove();
    }
    addMessage();
    addMyLastMessage();
    var message =$('#barraInvio').val();
    if (message) {
      $('#barraInvio').val("");
      setTimeout(function(){
      addRisposta();
      },1000);
    }
  }
}
/*invio e ricezioni messaggi*/

/*cambia chat*/
function clickUtente(){
  $('.contatto').removeClass('active');
  $(this).addClass('active');
  $('.nomeUtentescelto h4').remove();
  var nome = $('.contatto.active h4').clone();
  var target = $('.nomeUtentescelto').append(nome);
  $('.messaggi').removeClass('active');
  $($('.messaggi').get($(this).index())).addClass('active');
}
/*cambia chat*/

/*cambia chat*/




function init() {
  $('.messaggi').on('click', '.fa-angle-down', function() {
    console.log(this);
    $(this).next('.info-messaggi').slideToggle(100);
  });
  $('.messaggi').on('click', '.delete-message', function() {
    console.log(this);
    $(this).parent('.info-messaggi').parent('.stilemessaggio').remove();
    $('.contatto.active > .dati-interlocutore > .ultimo-messaggio > p').remove();
  });
  $('.messaggi').on('click', '.fa-angle-down', function() {
    console.log(this);
    $(this).next('.info-messaggi-ricevuti').slideToggle(100);
  });
  $('.messaggi').on('click', '.delete-message', function() {
    console.log(this);
    $(this).parent('.info-messaggi-ricevuti').parent('.stilerisposta').remove();
  });
  $('.contatto').click(clickUtente);
  ricercaPerNome();
  $('#barraInvio').keyup(pressInvioMsg);
}
$(document).ready(init);
