<script setup>
// Este arquivo é um componente Vue que representa o último resumo do carrinho de compras, exibindo o total geral e um botão para finalizar a compra.
import { totalDeTudo, totalDesconto, pagar} from '../../utils/cartUtils';
import { formataPreco } from '@/utils/currencyUtils';
</script>

<template>

    <section>
        <div class="sumary">
            <h1>Total Compra</h1>
            <p>
                Produtos: {{ formataPreco(totalDeTudo())}}
            </p>
            <hr>
            <p>
                Frete: Grátis
            </p>
                <hr>
            <p>
                Total: {{ formataPreco(totalDesconto())}}
            </p>
            <hr>
               <button @click="pagar()">Ir para o pagamento</button>
        </div>
     
    </section>

</template>

<style scoped>

hr {
    max-width: 500px;
}

.sumary {
    border: solid 1px black;
    padding: 40px;
}

.sumary p {
font-size: 25px;
margin-bottom: 35px;
}

 button {
 background: #c21a1a;
  border: none;
  border-radius: 5px;
  padding: 20px;
  font-size: 1rem;
  margin: 35px 20px 25px 20px;
  cursor: pointer;
  color: white;
  width: 460px;
}

h1 {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 25px;
}

button:hover{
transform: scale(0.9);
transition: .2s;
cursor: pointer;
}

</style>
