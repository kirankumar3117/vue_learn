<script >
import HomePage from '../components/Home/HomePage.vue';
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
    },
    async created(){
      const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/v2/get/basic',
        params: {country: 'us', imdb_id: 'tt1877830'},
        headers: {
          'X-RapidAPI-Key': '910a4786demsh2b7a963d3acfafdp1aadb9jsnd2bd3034b70d',
          'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
    
}

</script>

<template>
  <HomePage :auth="auth"/>
</template>
