import axios from 'axios';

export default axios.create({
    baseURL: 'carways-server-production.up.railway.app'
});