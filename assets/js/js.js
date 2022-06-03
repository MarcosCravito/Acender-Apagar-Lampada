
function acender(){

    document.getElementById("acessa").style.display = "block" 
    document.getElementById("desligada").style.display = "none" 
}

function desligar(){
    document.getElementById("acessa").style.display = "none" 
    document.getElementById("desligada").style.display = "block" 
    document.getElementById("desligada").src = "../assets/images/desligada.png"
}