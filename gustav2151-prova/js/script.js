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
if (tema == "Gaab"){
    newFundo = "img/Gaab.jpg"
    newFoto = "img/Gaab.png"
    titulo = "gaab"
    cor = "red"
    altura = "80%";
    right = "0%";
    bottom = "-5%";
}