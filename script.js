const listaCarros = [];
 
const Veiculo = function(marca, modelo, ano, portas, calcularIdade){
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano,
    this.portas = portas
};

Veiculo.prototype.calcularIdade = function(){

    return 2019 - this.ano;
}

document.getElementById('btnCadastrar').addEventListener('click', function() {
    cadastrarCarro();
});

function cadastrarCarro(){
    let marcaDOM = document.getElementById('inputMarca');
    let modeloDOM = document.getElementById('inputModelo');
    let anoDOM = document.getElementById('inputAno');
    let portasDOM = document.getElementById('inputPortas');
    const veiculo = new Veiculo(marcaDOM.value, modeloDOM.value, anoDOM.value, portasDOM.value);
    listaCarros.push(veiculo);
    console.log(veiculo.marca);
    verLista(listaCarros);
    limparFormulario();
}

function verLista(lista){
    var table = document.getElementById('id_table');
    limparTabela(table);

    for (const celula of lista) {

        const tr = table.insertRow(-1);
        let td = tr.insertCell(0);
        let texto = document.createTextNode(celula.marca);
        td.appendChild(texto);
    
        td = tr.insertCell(1);
        texto = document.createTextNode(celula.modelo);
        td.appendChild(texto);
    
        td = tr.insertCell(2);
        texto = document.createTextNode(celula.ano);
        td.appendChild(texto);
    
        td = tr.insertCell(3);
        texto = document.createTextNode(celula.portas);
        td.appendChild(texto);
    }
}

function limparFormulario(){
    marcaDOM = document.getElementById('inputMarca').value = '';
    modeloDOM = document.getElementById('inputModelo').value = '';
    anoDOM = document.getElementById('inputAno').value = '';
    portasDOM = document.getElementById('inputPortas').value = '';
}

function filtrar(palavra, funcao){

    let novo = [];
    for (const veiculo of listaCarros) {

        const manter = funcao(veiculo, palavra);
        if (manter){
            novo.push(veiculo);
        }
    }

    return novo;
}

function filtrarMarca(veiculo, marca){  
    return veiculo.marca === marca;
}

function filtrarIdade(veiculo, idade){  
    return veiculo.calcularIdade() <= idade;
}

function filtrarPortas(veiculo, portas){  
    return veiculo.portas == portas;
}

function limparTabela(tabela){
    while (tabela.rows.length > 1){
        tabela.deleteRow(1);
    }
}

document.querySelector('.bt-filtrar').addEventListener('click', function(){
    const filtro = document.getElementById('id_filtro').value;

    if(document.getElementById('id_radio-marca').checked){
        verLista(filtrar(filtro, filtrarMarca));
    }
    if(document.getElementById('id_radio-idade').checked){
        verLista(filtrar(filtro, filtrarIdade));
    }
   if(document.getElementById('id_radio-portas').checked){
        verLista(filtrar(filtro, filtrarPortas));
   }
});

