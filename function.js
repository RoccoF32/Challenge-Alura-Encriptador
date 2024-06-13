function encriptar(){
    let ingreso = document.querySelector("#ingreso").value;

    let resultado = document.getElementById("resultado");
    resultado.style.display="block";
    let imagen = document.getElementById("imagen");
    imagen.style.display = "none";

    let lista = [];

    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"

    for(let i=0; i<ingreso.length; i++ ){
        if(ingreso[i] == "e"){
            lista.push("enter");
        }else if(ingreso[i] == "i"){
            lista.push("imes");
        }else if(ingreso[i] == "a"){
            lista.push("ai");
        }else if(ingreso[i] == "o"){
            lista.push("ober");
        }else if(ingreso[i] == "u"){
            lista.push("ufat");
        }else{
            lista.push(ingreso[i]);
        }
    
    }

    let junto = lista.join("").toLowerCase();
    
    
    resultado.innerHTML = junto;

}

function desencriptar(){
    let ingreso = document.querySelector("#ingreso").value;

    let resultado = document.getElementById("resultado");
    resultado.style.display="block";

    let imagen = document.getElementById("imagen");
    imagen.style.display = "none";

    let lista = [];

    for(let i=0; i<ingreso.length; i++){
        if(ingreso[i] == "a"){
            lista.push(ingreso[i]);
            i++;
        }else if(ingreso[i] == "e"){
            lista.push(ingreso[i]);
            i = i+4;
        }else if(ingreso[i] == "i" || ingreso[i] == "o" || ingreso[i] == "u"){
            lista.push(ingreso[i]);
            i = i+3;
        }else{
            lista.push(ingreso[i]);
        }
    }
    console.log(lista);
    let junto = lista.join("").toLowerCase();
    resultado.innerHTML = junto;
}

function borrar(){
    let resultado = document.getElementById("resultado");
    resultado.style.display="none";
    let imagen = document.getElementById("imagen");
    imagen.style.display = "block";

    document.getElementById("ingreso").value = ""; 
    
}

function copiar(){
    let resultado = document.getElementById("resultado");
    navigator.clipboard.writeText(resultado.textContent);
    
    borrar();
    alert("Texto copiado con exito");

    navigator.clipboard.readText().then((clipText) => {
    document.getElementById('ingreso').innerText = clipText;
    })
    
}
