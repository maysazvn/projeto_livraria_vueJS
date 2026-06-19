<script setup>
// Este arquivo é um componente Vue que permite ao usuário visualizar e gerenciar os itens em seu carrinho de compras. Ele exibe uma lista de itens, permite que o usuário ajuste as quantidades ou remova itens, e mostra um resumo do total do carrinho. O componente é projetado para ser usado em uma página de carrinho de compras, onde os usuários podem revisar seus itens antes de finalizar a compra.
import CartItem from './CartItem.vue'
import { carrinho, cupom, cupomDigitado, atualizarQtdCarrinho, removerDoCarrinho } from '@/utils/cartUtils.js'
import CartSummary from './CartSummary.vue';

</script>

<template>
  <section>
    <h1>Carrinho</h1>

    <div class="produtos">
  <h3>
        Produto
      </h3>
      <h3 class="quantidade">
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
      :precototal="item.preco * item.quantidade"
      @remover="removerDoCarrinho"
      @attQuantidade="(dados) => atualizarQtdCarrinho(dados)"
    ></CartItem>

      <button class="voltar">
        <a href="/">Voltar para loja</a>
      </button>

        <div class="cupom">

            <input type="text" class="cupons" placeholder="Insira seu cupom (LIVRO30)" v-model="cupomDigitado">
            <button @click="cupom">Inserir cupom</button>

            <div class="summary">
        <CartSummary></CartSummary>
    </div>
        </div>

    </div>



  </section>
</template>

<style scoped>
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

button:hover{
transform: scale(0.9);
transition: .2s;
cursor: pointer;
}

.produtos {
  display: flex;
  justify-content: space-between;
  border-bottom: #c21a1a solid 2px;
    padding: 0px;
    width: 80%;
    margin: 0 auto;
}

.produtos h3 {
font-weight: bolder;
  font-size: 1.6rem;
}


.summary {
  width: 700px;
  padding: 15px;
  margin-left: auto;
  margin-right: 35px;
  margin-bottom: 4%;
}

button.voltar {
  background: white;
  border: rgb(189, 189, 189) solid 2px;
  border-radius: 5px;
  padding: 25px;
  font-size: 1.5rem;
  margin: 50px 20px 25px 60px;
  cursor: pointer;

}

button a {
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 20px;
}

.cupom{
  display: flex;
  margin: 2% 0 0 3%;
}

.cupom input {
  padding: 20px;
  border: black 2px solid;
  width: 330px;
  font-size: 25px;
  height: 4vw;
}

.cupom  button {
    background: #c21a1a;
  border: none;
  border-radius: 5px;
  padding: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
  width: 230px;
  height: 4vw;
}

</style>
