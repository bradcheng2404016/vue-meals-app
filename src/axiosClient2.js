import axios from 'axios'

const axiosClient2 = axios.create({
  baseURL: 'https://www.heidisql.com/installers/HeidiSQL_12.8.0.6908_Setup.exe',
});

export default axiosClient2;
