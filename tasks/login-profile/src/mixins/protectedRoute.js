
import router from "@/router/index.js";
import axios from 'axios';
export default{
      methods:{
       async protectedRoute(){
    
        if (!token) {
          router.push({ path: '/login' })
          return
        }
        const headers = {
          Authorization: `Bearer ${token}`
        };
        try {
          const response = await axios.get(`${process.env.VUE_APP_API}/protected`, { headers });
          // handle response data
        } catch (error) {
          console.error(error); // handle error
          router.push({ path: '/login' })
        }
        }
      }
   
}