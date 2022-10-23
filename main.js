const form = document.getElementById("form-contato");
const imgTel = '<img src="./images/contato.png" alt="Emoji celebrando"/>';

const contatos = [];
const telefones = [];

let linhas = '';

function adcionaLinha() {

    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');

    if (contatos.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já foi inserido`);
    } else {
        contatos.push(inputNomeContato.value);
        telefones.push(parseInt(inputTelContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += `<td><a href="tel:${inputTelContato.value}">${imgTel}</a></td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelContato.value = '';

}

function atualizaTabela() {
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function atualizaLinhaFinal(){
    
    document.getElementById('total-contatos').innerHTML = telefones.length;

}

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adcionaLinha();
    atualizaTabela();
    atualizaLinhaFinal();

});