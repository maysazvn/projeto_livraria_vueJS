<script setup>
  // Este arquivo é um componente Vue que representa o cabeçalho do aplicativo, contendo a barra de navegação com links para as principais seções do site, como Home, Produtos e Carrinho. Ele é projetado para ser reutilizado em todas as páginas do aplicativo, proporcionando uma navegação consistente para os usuários.
  import { RouterLink } from 'vue-router';
</script>

<template>

   <header>
    <div>
    <span><a href="#">EL BANCO</a></span>
    <p>Apreço a leitura</p>
    </div>

    <div>
    <i class="fa-solid fa-magnifying-glass"></i> <input type="search"> 
    </div>

    <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/produtos">Produtos</RouterLink></li>
        <li><RouterLink to="/carrinho">Carrinho</RouterLink></li>
    </ul>
    </nav>

<ul class="icones">
  <li><i class="fa-solid fa-cart-shopping"></i></li>
  <li><i class="fa-solid fa-heart"></i></li>
  <li> <i class="fa-solid fa-user"></i></li>
</ul>
  </header>
</template>

<style scoped>
/*header*/
header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 190px;
  border-bottom: 1px solid #cccccc;
}

header div{
  display: flex;
  gap: 15px;
  align-items: center;
}

header span{
  border-right: 2px solid #c21a1a;
  padding: 5px 15px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}

header span a{
  color: black;
  text-decoration: none;
}


header ul{
  display: flex;
  gap: 10px;
  list-style: none;
}

ul.icones{
  font-size: 1.5rem;
  gap: 30px;
}

nav ul{
  gap: 20px;
}

</style>
