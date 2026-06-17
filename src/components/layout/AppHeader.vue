<script setup>
// Este arquivo é um componente Vue que representa o cabeçalho do aplicativo, contendo a barra de navegação com links para as principais seções do site, como Home, Produtos e Carrinho. Ele é projetado para ser reutilizado em todas as páginas do aplicativo, proporcionando uma navegação consistente para os usuários.
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
const route = useRoute()
const router = useRouter()
const busca = ref(route.query.q ?? '')
const precoMin = ref('');
const precoMax = ref('');

watch(busca, (valor) => {
  router.push({
    path: '/produtos',
    query: valor ? { q: valor } : {},
  })
})

watch(
  () => route.query.q,
  (valor) => {
    busca.value = valor ?? ''
  },
)
const atualizarFiltros = () => {
const novaQuery = { ...route.query };
if (precoMin.value) {
    novaQuery.precoMin = precoMin.value;
  } else {
   novaQuery.precoMin = '';
  }
  if (precoMax.value) {
    novaQuery.precoMax = precoMax.value;
  } else {
    novaQuery.precoMax = '';
  }
  router.push({
    query: novaQuery
  });
}
</script>

<template>
  <header>
    <div>
      <span><a href="#">EL BANCO</a></span>
      <p>Apreço a leitura</p>
    </div>

    <div>
      <input v-model="busca" type="search" placeholder="Buscar produto..." class="busca" />
      <details>
      <summary>
        Filtrar por preço:
      </summary>
        <div class="filtroPreco">
          <input type="number" v-model.number="precoMin" placeholder="Minimo R$" @input="atualizarFiltros"/>
          <p>-</p>
          <input type="number" v-model.number="precoMax" placeholder="Máximo R$" @input="atualizarFiltros"/>
        </div>
      </details>
    </div>
      
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li class="produtos"><RouterLink to="/produtos">Produtos</RouterLink>
          <div class="submenu">
          <RouterLink to="/produtos?genero=romance">Romance</RouterLink>
          <RouterLink to="/produtos?genero=ficção">Ficção</RouterLink>
          <RouterLink to="/produtos?genero=fantasia">Fantasia</RouterLink>
          <RouterLink to="/produtos?genero=terror">Terror</RouterLink>
          <RouterLink to="/produtos?genero=outros">Outros</RouterLink>
          </div>
        </li>
        <li><RouterLink to="/favoritos">Favoritados</RouterLink></li>
        <li><RouterLink to="/carrinho">Carrinho</RouterLink></li>
      </ul>
    </nav>

    <ul class="icones">
      <li><i class="fa-solid fa-cart-shopping"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
      <li><i class="fa-solid fa-user"></i></li>
    </ul>
  </header>
</template>

<style scoped>
/*header*/
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 190px;
  border-bottom: 1px solid #cccccc;
}

header div {
  display: flex;
  gap: 15px;
  align-items: center;
}

header span {
  border-right: 2px solid #c21a1a;
  padding: 5px 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}

header span a {
  color: black;
  text-decoration: none;
}

header ul {
  display: flex;
  gap: 10px;
  list-style: none;
}

ul.icones {
  font-size: 1.5rem;
  gap: 30px;
}

nav ul {
  gap: 20px;
}
.busca {
  border: #c21a1a solid 2px;
  border-radius: 20px;
  color: #c21a1a;
  padding: 5px 10px;
  margin-right: 20px;
}
.filtroPreco input{
  width: 100px;
   border: #c21a1a solid 1px;
  }
  summary {
    margin-bottom: 2px;
  }
  .produtos{
    position: relative;
  }

  .submenu{
    display: none;
    position: absolute;
    top: 100%;
    padding: 10px;
    left: 0;
    z-index: 10;
    background-color: white;
    border: 2px solid #c21a1a;
  }

  .submenu a{
    display: block;
    color: #c21a1a;
    padding: 5px;
  }

  .produtos:hover .submenu{
    display: block;
  }
</style>
