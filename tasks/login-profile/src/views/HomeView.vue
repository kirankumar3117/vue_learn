<script >
import HomePage from '@/components/Home/HomePage.vue';
import NavBar from '@/components/NavBar.vue';
import LoadingSpinner from '@/components/ReusableComponets/LoadingSpinner.vue';
import getUserDetails from '@/mixins/getUserDetails';
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
  mixins:[getUserDetails],
 
    created(){
      this.getUserData();
    }

  
}
</script>

<template>
  <NavBar/>
  <HomePage/>
</template>

<style>
.disable{
  pointer-events: none;
    opacity: 0.4;
}
</style>