import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e7aef-default-rtdb.firebaseio.com/'
});

export default instance;