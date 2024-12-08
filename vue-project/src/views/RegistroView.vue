<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate'
import * as yup from 'yup';
import {defineStore} from 'pinia'
import {ref} from 'vue'
import {useRegistrarStore} from '../stores/registrarStore.js'

const nombre = ref('');
const email = ref('');
const registrarStore = useRegistrarStore();

const schema = yup.object({
    nombre: yup.string().required(),
    email: yup.string().email().required()
});

const onSubmit = () => {
    registrarStore.guardarRegistro(nombre.value, email.value);
    // registrarStore.nombre = nombre.value;
    // registrarStore.email = email.value;
    console.log('Listo');
}
</script>

<template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre">Nombre</label>
                <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"></Field>
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="form">
                <label for="email">Email</label>
                <Field v-model="email" type="email" name="email" id="email" placeholder="Ingrese su email"></Field>
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<style>
.form {
    margin-bottom: 10px;
}
</style>