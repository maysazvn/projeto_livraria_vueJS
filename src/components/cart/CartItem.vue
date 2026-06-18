<script setup>
// Este arquivo é para o componente CartItem.vue, que representa um item individual no carrinho de compras. Ele exibe as informações do produto, como nome, preço e quantidade, e permite que o usuário ajuste a quantidade ou remova o item do carrinho.
import { formataPreco } from '@/utils/currencyUtils';
defineProps(["id", "titulo", "autor", "resenha", "preco", "genero", "capa", "quantidade", "precototal"]);
const emit = defineEmits(['remover', 'attQuantidade']);
const removimento = (id) => {
  emit('remover', id);
};
const novaQuantidade = (id, event) => {
  const novaQ = parseInt(event.target.value);
  if (novaQ >= 1)  {
    emit('attQuantidade', { id, quantidade: novaQ });
  }
};
</script>

<template>

    <section>
        <div class="item">
            
            <div class="container">
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
            
            <input type="number" :value="quantidade" min="1" @input="novaQuantidade(id, $event)">

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
    right: 48vw;
    border: solid black 1px;
    width: 3vw;
    height: 2vw;
    font-size: large;
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
}

input { 
    max-height: 50px;
}

input a {
font-size: 30px;
}
</style>
