<script setup>
// Este arquivo é um componente Vue que representa o último resumo do carrinho de compras, exibindo o total geral e um botão para finalizar a compra.

</script>

<template>

    <section >
        <div class="sumary">
            <h1>Total Compra</h1>
            <p>
                Produtos: 
            </p>
            <hr>
            <p>
                Frete:
            </p>
                <hr>
            <p>
                Total:
            </p>
            <hr>
               <button>Ir para o pagamento</button>
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

</style>
