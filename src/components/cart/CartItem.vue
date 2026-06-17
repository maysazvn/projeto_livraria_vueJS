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
            
            <img :src="capa">
            
            <div class="capa">
                <h3>
                    {{ titulo }}
                </h3>
                <p>{{ autor }}</p>
                <p>
                    {{ formataPreco(preco) }}
                </p>
            </div>
            <input type="number" placeholder="k">
            <p>{{ formataPreco(precototal) }}</p>

        <button class="botaoRemover" @click="removimento(id)">
        <i class="fa-solid fa-trash"></i> Excluir
      </button>
        </div>  

    </section>

</template>

<style scoped>

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
}

input { 
    max-height: 50px;
}

input a {
font-size: 30px;
}
</style>
