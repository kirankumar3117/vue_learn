<script >
import HomePage from '@/components/Home/HomePage.vue';
import NavBar from '@/components/NavBar.vue';
import LoadingSpinner from '@/components/ReusableComponets/LoadingSpinner.vue';
import protectedRoute from "@/mixins/protectedRoute";
import { useProfileStore } from '@/stores/profile';
import axios from 'axios';
export default {
  components: {
    LoadingSpinner,
    NavBar,
    HomePage
},
  mixins:[protectedRoute],
  setup(){
    const profileStore=useProfileStore();
    return{
      profileStore
    }
  },
  methods:{
        async getUserData(){
          console.log("getuserdata")
          let token = localStorage.getItem("authToken") || sessionStorage.getItem('authToken');
        const headers = {
          Authorization: `Bearer ${token}`
        };
        try{
          const userData=await axios.get(`${process.env.VUE_APP_API}/userdata`, { headers });
          this.profileStore.setData(userData.data)
        }catch(err){
          console.log(err)
        }
        }
      },

    created(){
      this.getUserData();
    }

  
}
</script>

<template>
  <!-- <LoadingSpinner :loading="profileStore.loading"/> -->
  <NavBar/>
  <HomePage/>
  <!-- <ProfileUpdatePage :class="profileStore.loading ? 'disable' : ''"/> -->
</template>

<style>
.disable{
  pointer-events: none;
    opacity: 0.4;
}
</style>