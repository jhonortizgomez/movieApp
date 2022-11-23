import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '43505cab4407139b04206fe293f6b837',
    language: 'es-es',
  },
});

export default movieDB;
