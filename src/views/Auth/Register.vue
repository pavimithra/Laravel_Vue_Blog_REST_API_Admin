<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

import InputError from '@/Components/form/InputError.vue';

const form = ref({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const router = useRouter()
const formErrors = ref({})

async function register(form){
    formErrors.value = {}
    axios.post('/register', form)
        .then(response => {
            router.push({ name: 'login' })
        })
        .catch(error => {
            if (error.response?.data) {
                formErrors.value = error.response.data.errors
            }
        })
}
</script>

<template>
    <div>
        <h1 class=" text-3xl font-semibold underline">Register</h1>
        <form @submit.prevent="register(form)">
            <div class="mt-2">
                <label for="name">Name</label>
                <input type="text" v-model="form.name" id="name" required autofocus />
                <InputError class="mt-2" :message="formErrors?.name" />
            </div>

            <div class="mt-2">
                <label for="email">Email</label>
                <input type="email" v-model="form.email" id="email" required />
                <InputError class="mt-2" :message="formErrors?.email" />
            </div>

            <div class="mt-2">
                <label for="password">Password</label>
                <input type="password" v-model="form.password" id="password" required />
                <InputError class="mt-2" :message="formErrors?.password" />
            </div>

            <div class="mt-2">
                <label for="password_confirmation">Confirm Password</label>
                <input type="password" v-model="form.password_confirmation" id="password" required />
                <InputError class="mt-2" :message="formErrors?.password_confirmation" />
            </div>

            <button>Register</button>
        </form>
        <p>
            Already have an account?
            <router-link to="/login" class="underline">Login</router-link>
        </p>
    </div>
</template>