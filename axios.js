import axios from 'axios';

const instance = axios.create({
    baseURL: " https://sweepy-dev.herokuapp.com",

});

export default axios;
