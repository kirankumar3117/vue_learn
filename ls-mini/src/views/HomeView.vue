<script >
// import HomePage from '../components/Home/HomePage.vue';
import HomePage from "@/components/SampleHomePage.vue"
import router from "@/router/index.js";
import axios from 'axios'
export default{
  components:{
    HomePage
  },
  data(){
    return{
      auth:false
    }
  },
 
    async beforeCreate(){
      console.log(this.auth)

      let token=localStorage.getItem("authToken");
    if(!token){
     router.push({path:'/login'})
     return
    }

    const headers = {
      Authorization: `Bearer ${token}`
    };
    
    try {
      const response = await axios.get('https://amused-gray-zebra.cyclic.app/protected', { headers });
      console.log(response.data); // handle response data
     
    } catch (error) {
      console.error(error); // handle error
      router.push({path:'/login'})
    }
    }
   
    
}

</script>

<template>
  <HomePage />
</template>
