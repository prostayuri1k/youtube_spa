import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://todo-redev.herokuapp.com/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})