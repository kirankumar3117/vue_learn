<script >
import HomePage from '../components/Home/HomePage.vue';
import router from "@/router/index.js"
export default{
  components:{
    HomePage
  },
  beforeCreate() {
         let email=localStorage.getItem("email");
       if(!email){
        router.push({path:'/login'})
       }
      
    }
}

</script>

<template>
  <HomePage/>
</template>
