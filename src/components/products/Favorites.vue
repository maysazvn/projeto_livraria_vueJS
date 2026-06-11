<script setup>
import { computed } from 'vue';
import ProductCard from './ProductCard.vue';
import { produtos } from '@/data/product';
import { listaFavoritos } from '@/data/favoritos.js';
import { favoritar } from '@/data/favoritos.js';

const livrosFavoritados = computed(() => {
    return produtos.filter(livro => listaFavoritos.value.includes(livro.id));
})
</script>

<template>
<section class="favoritos">
    <h2>Livros favoritados</h2>

    <p v-if="livrosFavoritados.length === 0">
        Você ainda não favoritou nenhum livro.
    </p>

    <div v-else class="produtos">
            <ProductCard v-for="livro in livrosFavoritados" :key="livro.id" :id="livro.id" :titulo="livro.titulo" :autor="livro.autor" :resenha="livro.resenha" :preco="livro.preco" :genero="livro.genero" :capa="livro.capa"></ProductCard>
    </div>
</section>
</template>

<style scoped>

h2{
    font-weight: bold;
  font-size: 1.5rem;
  max-width: 20vw;
  margin: 1vw auto;
}
div.produtos{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
}
</style>