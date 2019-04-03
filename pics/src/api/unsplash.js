import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID f7a003510f63fa087da7b2de17265e9f1da6d89623be6d044a5dd4e5ecec77af'
  }
});