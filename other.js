const teclas = document.querySelectorAll('.teclas');
let i = 0;

function logNoConsole(){
    console.log('deu bom');
    
};

function alertaTim(){
    alert("Tecla Tim");
};

function ativarSom(som){
    document.querySelector(som).play();
    
}

document.querySelector('.tecla_clap').onclick = logNoConsole;
document.querySelector('.tecla_tim').onclick = alertaTim;



