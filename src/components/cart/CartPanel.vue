<script setup>
import CartItem from './CartItem.vue'

// Este arquivo é um componente Vue que permite ao usuário visualizar e gerenciar os itens em seu carrinho de compras. Ele exibe uma lista de itens, permite que o usuário ajuste as quantidades ou remova itens, e mostra um resumo do total do carrinho. O componente é projetado para ser usado em uma página de carrinho de compras, onde os usuários podem revisar seus itens antes de finalizar a compra.
import { carrinho } from '@/utils/cartUtils.js'
import CartSummary from './CartSummary.vue';
</script>

<template>
  <section>
    <h1>Carrinho</h1>

    <div class="produtos">
  <h3>
        Produto
      </h3>
      <h3>
        Quantidade
      </h3>
      <h3>Subtotal</h3>


    </div>
    <div>

  
         <CartItem
      v-for="item in carrinho"
      :key="item.id"
      :titulo="item.titulo"
      :autor="item.autor"
      :resenha="item.resenha"
      :capa="item.capa"
      :preco="item.preco"
      :genero="item.genero"
      :id="item.id"
      :quantidade="item.quantidade"
      :precototal="item.precoTotal"
    ></CartItem>


      <button>
        <a href="/">Voltar para loja</a>
      </button>

        <div>

            <input type="text">Insira seu cupom
            <button>Inserir cupom</button>

        </div>
       
    </div>

    <div class="summary">
        <CartSummary></CartSummary>
    </div>

  

  </section>
</template>

<style scoped>
div.nsei {
  display: flex;
  margin: 200px 0;
}

div.nsei h2 {
  margin: 0 170px;
  font-weight: bolder;
}

h1 {
  color: #c21a1a;
  margin: 100px 0 0 100px;
  font-weight: bolder;
}

button a {
  color: black;
  font-size: 15px;
}

button {
  background-color: white;
  padding: 10px 20px;
  border: solid black 1px;
  margin: 0 30px;
}

.produtos {
  display: flex;
  justify-content: space-between;
  border-bottom: #c21a1a solid 2px;
    padding: 10px;
    width: 80%;
    margin: 0 auto;
}

.produtos h3 {
font-weight: bolder;
  font-size: 1rem;
}

.summary {
  max-width: 500px;
  padding: 15px;
}

</style>
