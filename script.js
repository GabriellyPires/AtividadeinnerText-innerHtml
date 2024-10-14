
const tituloH1 = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const linkA = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');


tituloH1.innerText = 'Título da Página';
linkA.innerText = 'Acesse o site Prozeducacao';


listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

listaOrdenada.innerHTML = `
    <li><a href="https://site1.com">Link para Site 1</a></li>
    <li><a href="https://site2.com">Link para Site 2</a></li>
    <li><a href="https://site3.com">Link para Site 3</a></li>
`;