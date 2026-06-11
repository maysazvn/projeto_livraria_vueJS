import { ref } from "vue";
export const listaFavoritos = ref([]);

export function favoritar(id){
    if (listaFavoritos.value.includes(id)){
        listaFavoritos.value = listaFavoritos.value.filter(item => item !== id);
    } else{
        listaFavoritos.value.push(id);
    }
}