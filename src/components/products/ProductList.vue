<script setup>
// Este arquivo é um componente Vue que permitirá listar os livros disponíveis para compra. Ele exibirá uma grade de produtos, onde cada produto será representado por um componente ProductCard.vue. O componente ProductList.vue será responsável por buscar os dados dos livros (que estão armazenados em um arquivo JS local - /src/data/products.js). Ele usará um loop para renderizar um ProductCard para cada livro na lista, passando as informações do livro como props para o componente ProductCard. O ProductList.vue é projetado para ser usado na página de listagem de produtos, onde os usuários podem navegar pelos livros disponíveis e clicar em um produto para ver mais detalhes ou adicioná-lo ao carrinho de compras.
import ProductCard from './ProductCard.vue';
import { useRoute } from 'vue-router';
import { produtos } from '@/data/product.js';
import { computed } from 'vue';
const props = defineProps(['maisvendidos']);

const listaProdutos = computed(() => {
return props.maisvendidos ?? produtos;
}
)

const route = useRoute()

const produtosFiltrados = computed(() => {
  const q = (route.query.q ?? '').toLowerCase()
  const min = Number(route.query.precoMin) || 0
  const max = Number(route.query.precoMax) || 9999
  const generoLivro = route.query.genero;
  return listaProdutos.value.filter((p) => {
    const tituloCerto = p.titulo.toLowerCase().includes(q)
    const precoCerto = p.preco >= min && p.preco <= max
    const generoCerto = !generoLivro || p.genero.toLowerCase() === generoLivro.toLowerCase();

    return tituloCerto && precoCerto && generoCerto;
 /*if (!q) return produtos
 return produtos.filter((p) => p.titulo.toLowerCase().includes(q))
*/
})})
</script>

<template>
<section class="produtos">


    <ProductCard v-for="livro in produtosFiltrados" :key="livro.id" :id="livro.id" :titulo="livro.titulo" :autor="livro.autor" :resenha="livro.resenha" :preco="livro.preco" :genero="livro.genero" :capa="livro.capa" :subgenero="livro.subgenero"></ProductCard>


   </section>
</template>

<style scoped>
section.produtos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
}
</style>
