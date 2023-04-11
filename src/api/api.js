import axios from 'axios';

export default axios.create({
    baseURL: 'https://carways-server.up.railway.app'
});