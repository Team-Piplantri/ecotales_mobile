import axios from 'axios'
import * as SecureStore from 'expo-secure-store';

const baseURL = 'https://thearthashastra.herokuapp.com/api/'
// const baseURL = 'http://127.0.0.1:8000/api/'

async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  
async function get(key) {
    let result = await SecureStore.getItemAsync(key);
  }

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Authorization': get('access_token') ? "JWT " + get('access_token') : null,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});


axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        // Prevent infinite loops
        if (error.response.status === 401 && originalRequest.url === baseURL + 'token/refresh/') {
            window.location.href = '/login/';
            return Promise.reject(error);
        }

        if (error.response.data.code === "token_not_valid" &&
            error.response.status === 401 &&
            error.response.statusText === "Unauthorized") {
            const refreshToken = get('refresh_token');

            if (refreshToken) {
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

                // exp date in token is expressed in seconds, while now() returns milliseconds:
                const now = Math.ceil(Date.now() / 1000);

                if (tokenParts.exp > now) {
                    try {
                        const response = await axiosInstance
                            .post('/token/refresh/', { refresh: refreshToken });
                        save('access_token', response.data.access);
                        save('refresh_token', response.data.refresh);

                        axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                        originalRequest.headers['Authorization'] = "JWT " + response.data.access;
                        return await axiosInstance(originalRequest);
                    } catch (err) {
                    }
                } else {
                    window.location.href = '/login/';
                }
            } else {
                window.location.href = '/login/';
            }
        }
    
        return Promise.reject(error);
    }
);

export default axiosInstance