<script setup>
import {ref, computed} from 'vue'
import ResultadoSection from '../components/ResultadoSection.vue'
const valor = ref('');

const valorCalculado = computed(() => {
    return valor.value * 3;
});

const mostrarElemento = computed(() => {
    return valor.value > 10;
});
</script>

<template>
    <h3>Propiedades Computadas</h3>
    <input type="text" v-model="valor">
    {{ valorCalculado }}
    <ResultadoSection v-show="mostrarElemento" :resultado="valorCalculado"></ResultadoSection>
    <ResultadoSection v-if="mostrarElemento" :resultado="valorCalculado"></ResultadoSection>
    <div v-else-if="isNaN(valor)">Debe ser un número para calcular</div>
    <div v-else>Aquí no se muestra nada</div>
</template>

<style>
</style>