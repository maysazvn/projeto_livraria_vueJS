<script setup>
// Este arquivo é um componente Vue que representa a página inicial do aplicativo. Ele pode conter uma mensagem de boas-vindas, destaques dos produtos ou qualquer outra informação relevante para os visitantes que acessam o site pela primeira vez. O conteúdo específico da página inicial pode ser personalizado conforme as necessidades do projeto, mas geralmente serve como um ponto de entrada para os usuários explorarem o restante do site. Como sugestão, vocês poderão adicionar uma seção de "Destaques" ou "Novidades" para mostrar os produtos mais recentes ou populares, incentivando os visitantes a navegarem para a página de produtos.

import { produtos } from '@/data/product';
</script>

<template>
 
  <main>
   <section class="banner">
    <div>
    <p class="esp">Livro destaque</p>

    <h2>blablabla</h2>
    <p>Descrição do livro</p>
    <button>Acessar página do livro</button>
    </div>

    <img src="../imagens/scott-pilgrim-1.jpg" alt="">
   </section>

   <section class="info">
    <div>Frete grátis para SC</div>
    <div>Livros recomendados</div>
    <div class="a">Mais vendidos</div>
   </section>
   <h2>Lançamentos</h2>
   <section class="produtos">
    

    <div class="livros" v-for="livro in produtos" :key="livro.id">
      <img :src="livro.capa">

      <h3>{{ livro.titulo }}</h3>
      <p class="autor">{{ livro.autor }}</p>
      <p class="preco">R${{ livro.preco }}</p>


      <button>Comprar</button>
    </div>
   </section>
  </main>

  <footer>
    <div>
      <p>EL BANCO</p>
      <ul>
        <li> <a href="">A</a> </li>
        <li> <a href="">B</a> </li>
        <li> <a href="">C</a> </li>

      </ul>
    </div>

    <div>
      <p>Contato</p>
      <p>(47) 4004-5263</p>
      <p>contato@elbank.com</p>
    </div>
  </footer>


</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

/* geral */
p, h1, h2, span, li, button, div {
  font-family: "Montserrat", sans-serif;
}

/* banner */

.banner{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vw 10vw;
}

.banner img{
  width: 18vw;
}

.banner p.esp{
color: #c21a1a;
border: 2px solid #c21a1a;
border-radius: 5px;
padding: 10px;
margin: 2vw 0;
}

.banner h2{
font-size: 4rem;
font-weight: bold;
margin: 2vw 0;
}

.banner p{
  font-size: 1.5rem;
  margin: 2vw 0;
}

.banner button{
  background: #c21a1a;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 20px;
  font-size: 1.5rem;
}

/* info */

.info {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}

.info div{
  flex: 1;
  text-align: center;
  padding: 10px;
   border-right: 2px solid #c21a1a;
   font-size: 1.5rem;
}

.info div.a{
  border: none;
}

/* footer */

footer{
  display: flex;
  justify-content: space-between;
  padding: 2vw 10vw;
    background: #c21a1a;
}

footer p, footer li{
  font-family: 1.5rem;
  color: white;
  margin: 10px;
}

/* livros */

section.produtos{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
}

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

</style>
