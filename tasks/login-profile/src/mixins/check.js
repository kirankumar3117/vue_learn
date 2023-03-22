import router from "@/router"
import axios from "axios";
export default{
   
   async beforeCreate(){
        let token=localStorage.getItem("authToken") || sessionStorage.getItem('authToken');
        
        if(!token){
            return
        }
          const headers = {
            Authorization: `Bearer ${token}`
          };
          try {
            const response = await axios.get(`${process.env.VUE_APP_API}/protected`, { headers });
            router.push({ path: '/' })
          } catch (error) {
            return
          }
    }

}

