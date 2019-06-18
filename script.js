let listaCarros = [];

const Veiculo = function(marca, modelo, ano, portas){
    marca = marca,
    modelo = modelo,
    ano = ano,
    portas = portas
};


document.querySelector('#btCadastrar').addEventListener('click', function() {
    cadastrarCarro();
});

function cadastrarCarro(){
    let marcaDOM = document.getElementById('inputMarca');
    let modeloDOM = document.getElementById('inputModelo');
    let anoDOM = document.getElementById('inputAno');
    let portasDOM = document.getElementById('inputPortas');
    let veiculo = new Veiculo(marcaDOM.value, modeloDOM.value, anoDOM.value, portasDOM.value);
    listaCarros.push(veiculo);
    limparFormulario();
}

function verLista(){
    for(let i = 0; i < listaCarros.length; i++){
        console.log(listaCarros);
    }
}

function limparFormulario(){
    marcaDOM = document.getElementById('inputMarca').value = '';
    modeloDOM = document.getElementById('inputModelo').value = '';
    anoDOM = document.getElementById('inputAno').value = '';
    portasDOM = document.getElementById('inputPortas').value = '';
}