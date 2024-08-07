import axios from "axios";


const token = localStorage.getItem('token')
const axiosInstance = axios.create({
  baseURL: 'http://157.245.109.206:8091/identity-handler/', // Replace with your API base URL
  headers: {
      'Authorization': `Bearer ${token}`, // Replace 'yourToken' with your actual token
      'Content-Type': 'application/json'
  }
});

 export default axiosInstance;
  