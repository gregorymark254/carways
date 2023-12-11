import axios from 'axios';

export default axios.create({
    baseURL: 'https://carways-production.up.railway.app/'
});