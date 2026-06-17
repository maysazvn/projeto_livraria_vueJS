<script setup>
// Este arquivo é para o componente CartItem.vue, que representa um item individual no carrinho de compras. Ele exibe as informações do produto, como nome, preço e quantidade, e permite que o usuário ajuste a quantidade ou remova o item do carrinho.

import { formataPreco } from '@/utils/currencyUtils';
defineProps(["id", "titulo", "autor", "resenha", "preco", "genero", "capa", "quantidade", "precototal"]);
const emit = defineEmits(['remover']);
const removimento = (id) => {
  emit('remover', id);
};

</script>

<template>

    <section>
        <div class="item">
            
            <div class="container">
                <img :src="capa">
            
            <div class="detalhes">
                <h3>
                    {{ titulo }}
                </h3>
                <p>{{ autor }}</p>
                <p class="preoc">
        {{ formataPreco(preco) }}
                </p>
            </div>
            <input type="number" placeholder="k">
            <p class="pTotal">{{ formataPreco(precototal) }}</p>
        
        
        
            <button class="botaoRemover" @click="removimento(id)">
                <i class="fa-solid fa-trash"></i> Excluir
            </button>
       </div>
          </div>

    </section>

</template>

<style scoped>
.pTotal{
    position: absolute;
    right: 10vw;
}
input{
    position: absolute;
    right: 45vw;
}
.container img{ 
    margin-right: 50px ;
}
.botaoRemover {
    color: white;
    background-color: #c21a1a;
    height: 50px;
    width: 100px;
    position: absolute;
    right: 3vw;
    border: none;
    border-radius: 25px;
    font-weight: bolder;
    font-size: large;
}
.container {
    display: flex;
    align-items: center; 
 
}
img {
    max-width: 250px;
}
.item {
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
    border-bottom: solid rgb(125, 125, 125) 1px;
    padding: 40px;
    width: 80%;
    position: relative;
}


input { 
    max-height: 50px;
    position: absolute;
    right: 590px;
    padding: 7px;
}

inpu::placeholder {
        font-size: 30px;
}
input {
    font-size: 15px;
    font-weight: bold;
    max-width: 80px;
}

div.detalhes {
    font-size: 25px;
    margin: 30px 600px 0 20px;
    position: relative;
}



</style>
