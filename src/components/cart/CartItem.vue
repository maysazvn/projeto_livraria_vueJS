<script setup>
// Este arquivo é para o componente CartItem.vue, que representa um item individual no carrinho de compras. Ele exibe as informações do produto, como nome, preço e quantidade, e permite que o usuário ajuste a quantidade ou remova o item do carrinho.

import { formataPreco } from '@/utils/currencyUtils';
defineProps(["id", "titulo", "autor", "resenha", "preco", "genero", "capa", "quantidade", "precototal"]);



</script>

<template>

    <section>
        <div class="item">
            
            <img :src="capa">
            
            <div class="detalhes">
                <h3>
                    {{ titulo }}
                </h3>
                <p>{{ autor }}</p>
                <p>
                    {{ formataPreco(preco) }}
                </p>
            </div>
            <input type="number" :placeholder="quantidade">
            <p>{{ formataPreco(precototal) }}</p>

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

input {
    font-size: 15px;
    font-weight: bold;
    max-width: 80px;
}

div.detalhes {
    font-size: 25px;
    margin: 30px 600px 0 20px;
}
</style>
