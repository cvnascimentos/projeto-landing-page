/* quando clicar na seta avançar temos que esconder todas as imgagens e mostrar a proxima imagem 
a imagem atual começa em 0 
assim que for clicado em avançar eu preciso adicionar maus 1 ao contador de imagens
para saber que eu vou mostrar a segunda imagem



    mostrar a proxima imagem
    pegaar todas as imagens, descobrir qual é a proxima, e colocar a classe mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagens (){
    imagensPainel[imagemAtual].classList.add('mostrar');
}


setaAvancar.addEventListener('click', function () {

    const totalDeImagens = imagensPainel - 1;
    if (imagemAtual === imagensPainel.length - 1) {
        return;
    }

    imagemAtual++;

    esconderImagens();
    mostrarImagens ();

});

setaVoltar.addEventListener('click', function () {

    const totalDeImagens = imagensPainel - 1;
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagens ();

});






