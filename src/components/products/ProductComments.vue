<script setup>
import { ref } from 'vue';
defineProps(['id']);

const comentarios = ref([{nome: 'Fábio Longo de Moura', texto: 'Muito bom!'}]);
const nome = ref('');
const texto = ref('');

function adicionarComentario() {

  if(!nome.value.trim() || !texto.value.trim()){
    alert("Preencha antes de enviar!")
  } else{
    comentarios.value.unshift({nome: nome.value, texto: texto.value});
    }
    nome.value = '';
    texto.value = '';
}
</script>

<template>
    <div class="abaComentarios">
    <div class="comentarios">
            <h3>Comentários</h3>

            <div class="forms">
            <input type="text" v-model="nome" placeholder="Insira seu nome">
            <textarea v-model="texto" placeholder="Avalie o produto"></textarea>
            <button type="submit" @click="adicionarComentario">Comentar</button>
            </div>
        </div>

        <div class="listaComentarios" v-for="comentario in comentariosFiltrados" :key="comentario.nome">
            <p class="nome">{{ comentario.nome }}</p>
            <p class="texto">{{ comentario.texto }}</p>
        </div>
    </div>
</template>

<style scoped>
    .comentarios h3{
        color: black;
    font-weight: bold;
    font-size: 2rem;
    }

    .forms{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .forms input,
    .forms textarea{
        padding: 10px;
        border: 1px solid black;
        border-radius: 10px;
        font-size: 1rem;
        background: #fafafa;
        font-family: Arial, Helvetica, sans-serif
    }

    .forms textarea{
        width: 100%;
    }

    .forms button{
        background: #c21a1a;
        color: white;
        border: none;
        border-radius: 10px;
        padding: 10px;
        font-size: 1.5rem;
    }

    button:hover{
transform: scale(0.9);
transition: .2s;
cursor: pointer;
}

.listaComentarios{
    background-color: #e3e3e3;
    padding: 15px;
    border-radius: 10px;
    margin: 10px;
}

.listaComentarios .nome{
    font-weight: bold;
    font-size: 1.5rem;
    color: black;
}

.listaComentarios .texto{
    color: black;
}
</style>
