<script setup>
import {useWeather} from '../composables/useWeather'
import {onMounted} from 'vue'
import {useWeatherStore} from '../stores/weatherStore.js'

const weatherStore = useWeatherStore();

onMounted(() => {
    useWeather();
});
</script>

<template>
<h1>La temperatura actual es: {{ weatherStore.temperatura }} °</h1>
</template>

<style>
</style>