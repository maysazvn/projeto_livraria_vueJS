<script setup>
import CartItem from './CartItem.vue'

// Este arquivo é um componente Vue que permite ao usuário visualizar e gerenciar os itens em seu carrinho de compras. Ele exibe uma lista de itens, permite que o usuário ajuste as quantidades ou remova itens, e mostra um resumo do total do carrinho. O componente é projetado para ser usado em uma página de carrinho de compras, onde os usuários podem revisar seus itens antes de finalizar a compra.
import { carrinho } from '@/utils/cartUtils.js'
</script>

<template>
  <section>
    <h1>Carrinho</h1>

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

</style>
