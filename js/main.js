const controle = document.querySelectorAll('[data-controle]');        //Captando pelo nome da data, no caso estamos pegando cada buttom, do - e do +, no caso todas informações da tag
const estatisticas = document.querySelectorAll('[data-estatisticas]');

const pecas = {
     "bracos": {
          "forca": 29,
          "poder": 35,
          "energia": -21,
          "velocidade": -5
     },

     "blindagem": {
          "forca": 41,
          "poder": 20,
          "energia": 0,
          "velocidade": -20
     },
     "nucleos": {
          "forca": 0,
          "poder": 7,
          "energia": 48,
          "velocidade": -24
     },
     "pernas": {
          "forca": 27,
          "poder": 21,
          "energia": -32,
          "velocidade": 42
     },
     "foguetes": {
          "forca": 0,
          "poder": 28,
          "energia": 0,
          "velocidade": -2
     }
}

controle.forEach((elemento) => {                                      //O forEach() percorre um array
     elemento.addEventListener('click', (event) => {
          manipulaDados(event.target.dataset.controle, event.target.parentNode);          //O primeiro parâmetro capta se a operacao é de + ou - e o segundo procura o elemento pai do buttom
          atualizaEstatisticas(event.target.dataset.peca);
     });
})

function manipulaDados(operacao, controle) {                          //Recebe a operacao de parâmetro que pode ser + ou - e controle que é a div controle, pai do buttom

     const peca = controle.querySelector('[data-contador]');          //Captando pelo nome da data, no caso estamos pegando o input, filho do controle, o parãmetro passado no elemento pai

     if (operacao === "-") {
          peca.value = parseInt(peca.value) - 1;                      //Se o parâmetro operacao for igual a - , faça menos
     } else {
          peca.value = parseInt(peca.value) + 1;                      //Se o parâmetro operacao for igual a +, faça mais
     }
}

function atualizaEstatisticas(peca) {

     estatisticas.forEach((elemento) => {
          elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas];
     })
}

// function atualizaEstatisticas(peca) {
//      estatisticas.forEach((elemento) => {
//           elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
//      })
// }