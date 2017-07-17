var tabela =  document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {

    if(event.target.tagName == 'TD'){
    event.target.parentNode.classList.add("fadeOut");

      setTimeout(function(){
      //pego o alvo do click (por exemplo uma tr) e removo a linha toda
      event.target.parentNode.remove();
      },500); //espera 500 milisegundos = 0.5 segundos
    }
});
