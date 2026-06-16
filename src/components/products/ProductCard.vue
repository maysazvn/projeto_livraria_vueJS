<script setup>
// Este arquivo é um componente Vue que permite componentizar a exibição de um produto individual em uma lista de produtos. Ele exibe as informações do produto, como nome, preço e imagem, e pode incluir um botão para adicionar o produto ao carrinho de compras. O componente é projetado para ser reutilizado em diferentes partes do aplicativo onde a exibição de produtos é necessária, como na página de listagem de produtos ou em recomendações de produtos relacionados. Como sugestão, não exiba todas as informações do Livro, deixando alguma div oculta e trabalhando o v-for ou v-if para exibir somente o nome e o preço, e ao clicar em um botão "Detalhes" ou "Ver mais", exiba as informações adicionais do produto, como descrição, autor e imagem. Isso pode ser feito usando uma propriedade de estado para controlar a visibilidade das informações adicionais.

import { ref } from 'vue';
import ProductComments from './ProductComments.vue';
import { formataPreco } from '@/utils/currencyUtils.js';
import { favoritar } from '@/data/favoritos.js';
defineProps(["id", "titulo", "autor", "resenha", "preco", "genero", "capa", "subgenero"])
const abrirDetalhes = ref(false);
import { addCarrinho } from '@/utils/cartUtils.js';
</script>

<template>
<div class="livros">
      <img :src="capa">

      <div class="favoritar">
      <h3>{{ titulo }}</h3>
      <button class="favoritar" @click="favoritar(id)">❤️</button>
      </div>
      <p class="autor">{{ autor }}</p>
      <p class="preco">{{ formataPreco(preco) }}</p>


      <button @click.prevent="abrirDetalhes = true">Detalhes</button>
    </div>

    <div v-if="abrirDetalhes" class="overlay">
        <div class="detalhes">
            <button class="fechar" @click.prevent="abrirDetalhes = false">X</button>
            <h3>{{ titulo }}</h3>

        <div class="livro">
         <div class="esquerda">
            <img :src="capa">
         </div>

         <div class="direita">
            <p class="autor">{{ autor }}</p>
            <p class="genero">{{ genero }}</p>
            <p class="subgenero">{{ subgenero }}</p>
            <p class="resenha">{{ resenha }}</p>
            <p class="preco">{{ formataPreco(preco) }}</p>

            <button class="adicionar" @click.prevent="abrirDetalhes = false"  >Adicionar ao carrinho</button>
         </div>
        </div>

        <hr>

        <ProductComments :id="id"></ProductComments>
        </div>
    </div>
</template>

<style scoped>
.livros img{
  width: 20vw;
  height: 30vw;
}

.livros h3{
  font-weight: bold;
  font-size: 1.5rem;
  max-width: 20vw;
}

.livros p.preco{
 font-weight: bold;
font-size: 1.5rem;
}

.livros button{
font-size: 1.5rem;
background: #c21a1a;
color: #ffffff;
border: none;
border-radius: 10px;
width: 10vw;
padding: 10px;
margin-bottom: 50px;
}

button:hover{
transform: scale(0.9);
transition: .2s;
cursor: pointer;
}

.overlay{
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(77, 77, 77, 0.417);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}

.detalhes{
    background: #ffffff;
    padding: 2vw;
    border-radius: 15px;
    box-shadow: 0px 0px 15px #000000ae;
    align-items: center;
    width: 31vw;
    height: auto;
    max-height: 90vh;
    overflow-y: auto;
}

.detalhes .fechar{
    background: #c21a1a;
    color: white;
    border: none;
    border-radius: 15px;
    padding: 5px;
    font-size: 1.5rem;
    width: 15%;
}

.detalhes h3{
    color: black;
    font-weight: bold;
    font-size: 2.5rem;
    text-align: center;
    margin: 15px;
}

.livro{
    display: flex;
    align-items: center;
}

.esquerda img{
    width: 15vw;
    margin: 0 2vw 0 0;
    box-shadow: 0px 0px 15px #000000ae;
}

.direita p{
    color: black;
    font-size: 1.5rem;
}

.direita .autor{
    color: black;
    font-weight: bold;
    font-size: 2.5rem;
}

.direita .preco{
    font-weight: bold;
    font-size: 2rem;
}

.direita .resenha{
margin: 10px 0;
}

.direita .adicionar{
font-size: 1.5rem;
background: #c21a1a;
color: #ffffff;
border: none;
border-radius: 10px;
width: 10vw;
padding: 10px;
}

hr{
    margin: 25px 0 15px 0;
}

div.favoritar{
    display: flex;
}

button.favoritar{
font-size: 1.5rem;
background: #ffffff00;
width: 1vw;
padding: 1px;
margin-left: 10px;
margin-bottom: 1px;
}

.direita .subgenero{
    font-size: 1rem;
}
</style>
