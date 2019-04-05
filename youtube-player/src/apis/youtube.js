import axios from 'axios';

const KEY = 'AIzaSyANNMneIXJmCIo6QStb5I278_kb1SzRRWY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    maxResults:5,
    key: KEY
  }
})