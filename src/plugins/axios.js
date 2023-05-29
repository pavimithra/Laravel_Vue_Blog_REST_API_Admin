import axios from 'axios';
//import useAuth from '@/composables/auth';

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
    (res) => res,
    (error) => {
      if ([401, 419].includes(error.response.status) && !error.request.responseURL.endsWith("/api/user")) {
        //const { resetUser } = useAuth()
        //resetUser()
        //location.assign('/login')
      } else {
        return Promise.reject(error);
      }
    }
  );

await axios.get("/sanctum/csrf-cookie", {
    baseURL: 'http://localhost:8000/',
});