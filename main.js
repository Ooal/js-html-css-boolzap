/*ricerca user*/
/*function pressInvioRicerca(){
  if (event.which == 13) {
    ricercaPerNome();
  }
}*/
/*function ricercaPerNome(){
  var input;
  var filtro;
  var lista;
  var voci;
  var x;
  var testo;
  input = document.getElementById("barraRicerca");
  filtro = input.value.toUpperCase();
  lista = document.getElementById("contatti");
  classi =lista.getElementsByClassName("contatto");
  voci = lista.getElementsByTagName("h4");
  for (i = 0; i < voci.length; i++) {
    x = lista.getElementsByTagName("h4")[i];
    testo = x.textContent || x.innerText;
    if (testo.toUpperCase().indexOf(filtro) > -1) {
      voci[i].style.display = "";
    } else {
      classi[i].style.display = "none";
    }
  }
  if (input == "") {
    classi.style.display = "";
  }
}*/



/*invio e ricezioni messaggi*/
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
function pressInvioMsg (){
  if (event.which == 13) {
    addMessage();
    $('#barraInvio').val("");
    setTimeout(function(){
      addRisposta();
    },1000);
  }
}
/*invio e ricezioni messaggi*/


function init() {
/*  $('#barraRicerca').keydown(pressInvioRicerca);*/
  $('#barraInvio').keydown(pressInvioMsg);
}
$(document).ready(init);
