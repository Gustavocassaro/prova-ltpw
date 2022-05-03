function calc() {
    //entrada
    Dia = document.forms.dia.value
}
//processamento
if(Dia == "Dia 1"){
    valor = 1000
}
if (Dia == "Dia 2"){
    valor = 1450
}
if (Dia == "Dia 3"){
    valor = 2000
}
    

//saída
document.getElementById("total").value=valor;

document.getElementById("Camarote").checked = false
document.getElementById("Open Bar").checked = false
document.getElementById("Open Food").checked = false
document.getElementById("Pista").checked = false

  //processamento
  if (tema == "Gaab") {
    newFundo = "img/Gaab.jpg";
    newFoto = "img/Gaab.png";
    titulo = "Gaab";
    cor = "red";

    altura = "80%";
    right = "0%";
    bottom = "-5%";
  }
else if (tema == "Pericles"){
    newFundo = "img/Pericles.jpg";
    newFoto = "img/Pericles.png";    
    titulo = "Pericles";
    cor = "blue";

    altura = "85%";
    right = "5%";
    bottom = "-5%";
}
else if(tema == "Dilsinho"){
    newFundo = "img/Dilsinho.jpg";
    newFoto = "img/Dilsinho.png";    
    titulo = "Dilsinho";
    cor = "blue";

    altura = "80%";
    right = "-2%";
    bottom = "0%";
}
else if(tema == "Jão"){
    newFundo = "img/Jão.jpg";
    newFoto = "img/Jão.png";    
    titulo = "Jão";
    cor = "blue";

    altura = "85%";
    right = "-2%";
    bottom = "0%";
}
