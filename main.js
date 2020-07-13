/*ricerca user*/
function ricercaPerNome(){
  var input;
  var valore;
  var filtro;
  var lista;
  var voci;
  var x;
  var testo;
  input = document.getElementById("barraRicerca");
  valore = document.getElementById('barraRicerca').value;
  filtro = input.value.toUpperCase();
  lista = document.getElementById("contatti");
  classi =lista.getElementsByClassName("contatto");
  voci = lista.getElementsByTagName("h4");
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
  var risposta = $('.template-risposta > p').clone();
  risposta.addClass('stilerisposta');
  var target = $('.messaggi.active').append(risposta);
}
function addMessage(){
  var message =$('#barraInvio').val();
  if (message != "") {
    var messaggio = $('.template-messaggio > p').clone();
    messaggio.addClass('stilemessaggio').text(message);
    var target = $('.messaggi.active').append(messaggio);
  }
}
function pressInvioMsg (){
  if (event.which == 13) {
    addMessage();
    var message =$('#barraInvio').val();
    if (message != "") {
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





function init() {
  $('.contatto').click(clickUtente);
  ricercaPerNome();
  $('#barraInvio').keydown(pressInvioMsg);
}
$(document).ready(init);
