<script setup>
import useAuth from '@/composables/auth';
import InputError from '@/Components/form/InputError.vue';

const { form, login, formErrors, isLoading } = useAuth()
</script>

<template>
    <div>
        <form @submit.prevent="login">

            <div class="mt-2">
                <label for="email">Email</label>
                <input type="email" v-model="form.email" id="email" required placeholder="email@example.com" />
                <InputError class="mt-2" :message="formErrors?.email" />
            </div>

            <div class="mt-2">
                <label for="password">Password</label>
                <input type="password" v-model="form.password" id="password" required  placeholder="password" />
                <InputError class="mt-2" :message="formErrors?.password" />
            </div>

            <button :disabled="isLoading" :class="{ 'opacity-25': isLoading }">Login</button>
        </form>
    </div>
</template>