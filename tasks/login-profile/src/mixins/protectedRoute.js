
import axios from 'axios';
export default{
      methods:{
       async protectedRoute(){
        token=localStorage.getItem('authToken') || sessionStorage.getItem('authToken')
        if (!token) {
          return
        }
        const headers = {
          Authorization: `Bearer ${token}`
        };
        try {
          const response = await axios.get(`${process.env.VUE_APP_API}/protected`, { headers });
        } catch (error) {
          console.error(error); 
          if(localStorage.getItem('authToken')){
            localStorage.removeItem('authToken')
          }else{
            sessionStorage.removeItem('authToken')
          }
        }
        }
      }
   
}