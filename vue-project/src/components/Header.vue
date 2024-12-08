<script setup>
import Weather from './Weather.vue';
import {ref, defineProps, watch} from 'vue'

const props = defineProps(['mensaje']);
const mensaje = ref(props.mensaje);

watch(() => props.mensaje, (newValue) => {
    mensaje.value = newValue;
});
</script>

<template>
    <div class="header">
        {{ mensaje }}
        <hr>
        <p>Sin Watch, Ref ya es reactivo:</p>
        {{ props.mensaje }}
        <Weather></Weather>
    </div>
</template>
<style scoped>
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #333;
        color: white;
    }
    h1{
        margin: 0;
    }
</style>