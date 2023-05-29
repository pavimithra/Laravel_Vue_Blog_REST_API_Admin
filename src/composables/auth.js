import { ref, reactive } from 'vue'
import { useRouter, useRoute } from "vue-router";
import axios from 'axios'

const user = reactive({
    id: '',
    name: '',
    email: '',
})

export default function useAuth() {

    const form = reactive({
        email: "",
        password: "",
        remember: false
    })
    const formErrors = ref({})
    const router = useRouter()
    const route = useRoute()
    const isLoading = ref(false)

    const login = async () => {
        if (isLoading.value) return

        formErrors.value = {}
        isLoading.value = true

        axios.post('/login', form)
            .then(response => {
                const redirectName = route.query.redirect || 'dashboard'
                router.push({ name: redirectName })
            })
            .catch(error => {
                if (error.response?.data) {
                    formErrors.value = error.response.data.errors
                }
            })
            .finally(() => { isLoading.value = false })
    }

    const getUser = async () => {
        if(!user.id) {
            try{
                const response = await axios.get('/api/user')
                user.id = response.data.id;
                user.name = response.data.name;
                user.email = response.data.email;
            }
            catch{
                await resetUser()
            }
        }
    }

    const logout = async () => {
        await axios.post('/logout')
        router.replace({ name: 'login' })
        resetUser()
        console.log('logout')
    }

    const resetUser = async () => {
        user.id = "";
        user.name = "";
        user.email = "";
    }

    return { form, login, user, formErrors, isLoading, logout, getUser, resetUser }
}