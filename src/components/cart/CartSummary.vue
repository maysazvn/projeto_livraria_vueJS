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
        </div>
        <div>
            <button>Ir para o pagamento</button>
        </div>
    </section>

</template>

<style scoped>

hr {
    max-width: 70%;
}

.sumary {
    border: solid 1px black;
    padding: 40px;
}

.sumary p {
font-size: 25px;
}

</style>
