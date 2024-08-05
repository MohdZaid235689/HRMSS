import axios from "axios";

 const axiosInstance = axios.create({
    baseURL: "http://157.245.109.206:8087/hr-handler/job/",
  
    timeout: 25000, // Set a timeout
  });

 export default axiosInstance;
  