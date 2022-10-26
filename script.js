const listaAnimais = document.querySelector('.animais-lista');
const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
// console.log(animaisTop);

const primeiroH2 = document.querySelector('h2');
const h2rect = primeiroH2.getBoundingClientRect();
const h2Left = primeiroH2.offsetLeft;
// console.log(h2rect);
if(h2rect.top < 0){
  // console.log('Passou do Elemento')
}

// console.log(
//   window.innerWidth,
//   window.innerHeight,
//   window.outerWidth,
//   window.outerHeight
// );
const small = window.matchMedia('(max-width: 600px)').matches;
if(small){
  // console.log('Usuário Mobile');
} else{
  // console.log('Não é Mobile')
}
// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img')
const primeiraImagemTop = primeiraImagem.offsetTop;
console.log(primeiraImagemTop);
// Retorne a soma da largura de todas as imagens

function somaImagens() {
const imagens = document.querySelectorAll('img');
let soma = 0
imagens.forEach((imagem)=>{
  soma += imagem.offsetWidth
});
console.log(soma)
}
window.onload = function(){
  somaImagens();
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link)=>{
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log(link, 'Possui acessibilidade')
  } else {
    console.log(link, 'Não possui boa acessibilidade')
  }
});
console.log(links)


const browserSmall = window.matchMedia('(max-width: 720px)').matches
if(browserSmall){
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}

// teste
