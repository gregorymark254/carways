import axios from 'axios';

export default axios.create({
    baseURL: 'https://carways-server-production.up.railway.app/'
});