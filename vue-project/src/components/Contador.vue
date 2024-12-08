<script setup>
import {ref} from 'vue';

// const props = defineProps({
//   contador: {
//     type: Number,
//     required: true,
//   },
// })

const contador = ref(0);

const incrementarValor = () => {
  contador.value++;
  console.log(contador.value);
}
</script>

<template>
  <p>{{ contador }}</p>
  <button @click="incrementarValor">Incrementar</button>
</template>

<style scoped>
</style>
