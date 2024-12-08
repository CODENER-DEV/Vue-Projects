<script setup>
import {useRegistrarStore} from '../stores/registrarStore.js'
import {ref, watch} from 'vue'
const registrarStore = useRegistrarStore();

const nombre = ref(registrarStore.nombre);
const email = ref(registrarStore.email);

watch(() => registrarStore.nombre, (newValue) => {
    nombre.value = newValue;
});

watch(() => registrarStore.email, (newValue) => {
    email.value = newValue;
});

</script>

<template>
    <div class="sidebar">
        <h2>Barra lateral</h2>
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ nombre }}</h3>
        <h3>Email: {{ email }}</h3>
        <hr>
        <p>Sin Watch, Ref ya es reactivo</p>
        <h3>Nombre: {{ registrarStore.nombre }}</h3>
        <h3>Email: {{ registrarStore.email }}</h3>
        <ul>
            <li><RouterLink to="/contador">Contador</RouterLink></li>
            <li><RouterLink to="/lista-de-tareas">Lista de Tareas</RouterLink></li>
            <li><RouterLink to="/registrar">Registrar</RouterLink></li>
            <li><RouterLink to="/calcular">Calcular</RouterLink></li>
        </ul>
    </div>
</template>

<style>
    .sidebar{
        width: 200px;
        background-color: #000;
        padding: 20px;
    }
</style>