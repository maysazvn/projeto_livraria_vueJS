<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/produtos">Produtos</RouterLink></li>
        <li><RouterLink to="/carrinho">Carrinho</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>
