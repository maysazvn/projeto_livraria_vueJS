// Este arquivo é um módulo JavaScript que contém a lógica relacionada ao carrinho de compras em um aplicativo Vue.js. Ele define uma estrutura de dados para representar os itens no carrinho, incluindo informações como id, título, autor, resenha, preço, capa (URL da imagem), quantidade e preço total. O módulo também exporta uma função addCarrinho que permite adicionar um livro ao carrinho, atualizando a quantidade e o preço total conforme necessário. A função utiliza a lista de produtos importada do arquivo /src/data/product.js para encontrar as informações do livro com base no id fornecido. Este módulo é projetado para ser usado em componentes relacionados ao carrinho de compras, permitindo que os usuários adicionem livros ao carrinho e visualizem os itens selecionados. AINDA PRECISAM SER ADICIONADAS VÁRIAS FUNÇÕES AQUI!!!
//Exemplo: Remover itens do carrinho, adicionar quantidade para o item já no carrinho, remover quantidade para o item já no carrinho, calcular o total do carrinho, filtrar livros por autor, por preço, etc. Vocês podem criar funções para cada uma dessas funcionalidades e exportá-las para serem usadas em outros componentes do aplicativo, como o ProductList.vue, onde o usuário poderá filtrar os livros disponíveis, ou no CartPanel.vue, onde o usuário poderá gerenciar os itens em seu carrinho de compras.

import { produtos } from '@/data/product'
import { ref } from 'vue'

const cupomDigitado = ref('');
const desconto = ref(0);

const carrinho = ref([
  {
    id: 1,
    titulo: 'Jurassic Park',
    autor: 'Michael Crichton',
    resenha: 'dinosauro',
    preco: 58.0,
    genero: 'ficção científica',
    capa: '/imagens/jurassic-park.jpg',
    quantidade: 1,
  },
  {
    id: 2,
    titulo: 'Orgulho e Preconceito',
    autor: 'Jane Austen',
    resenha: 'preconceito',
    preco: 51.0,
    genero: 'romance',
    capa: '/imagens/orgulho-e-preconceito.jpg',
    quantidade: 1,
  },
  {
    id: 3,
    titulo: 'O morro dos ventos uivantes',
    autor: 'Emily Bronte',
    resenha: 'tornado',
    preco: 44.9,
    genero: 'romance gótico',
    capa: '/imagens/o-morro.jpg',
    quantidade: 3,
  }
])

function addCarrinho(idLivro, quantidade) {
  const livro = produtos.find((p) => p.id === idLivro)
  if (livro) {
    const itemExistente = carrinho.value.find((item) => item.id === idLivro)
    if (itemExistente) {
      itemExistente.quantidade += quantidade
      itemExistente.precoTotal = itemExistente.quantidade * livro.preco
    } else {
      carrinho.value.push({
        ...livro,
        quantidade,
        precototal: quantidade * livro.preco,
      })
    }
  }
}

function removerDoCarrinho(idLivro) {
const pqpFunciona = Number(idLivro);
carrinho.value = carrinho.value.filter((item) => item.id !== pqpFunciona);
}

const atualizarQtdCarrinho = ({ id, quantidade }) => {

  console.log('teste', id, quantidade)

  const item = carrinho.value.find(i => i.id === id)
  if (item) {
    item.quantidade = quantidade
  }
}

function pagar(){
alert('Pagamento efetuado!');

carrinho.value = [];
}

function cupom(){
  if(cupomDigitado.value.toUpperCase() === 'LIVRO30'){
    desconto.value = 0.30;
    alert("Cupom aplicado!");
  } else{
    alert("Cupom inválido!");
    console.log(cupomDigitado)
    desconto.value = 0;
  }
  }

const totalDeTudo = () => {
  let total = 0;
  for(const i of carrinho.value) {
    total += i.preco * i.quantidade
  }
  return total
}

const totalDesconto = () => {
    const totalBase = totalDeTudo();
    const valorDoDesconto = totalBase * desconto.value;
    return totalBase - valorDoDesconto;
  }

export { carrinho, addCarrinho, cupom, totalDeTudo, totalDesconto, cupomDigitado, desconto, removerDoCarrinho, atualizarQtdCarrinho, pagar }
