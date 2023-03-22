<script >
import router from "@/router/index.js";
import axios from 'axios'
import ProfileUpdatePage from '@/components/Home/ProfileUpdatePage.vue';
export default {
  components: {
    ProfileUpdatePage
},
  
  async beforeCreate() {
    let token = localStorage.getItem("authToken") || sessionStorage.getItem('authToken');
    if (!token) {
      router.push({ path: '/login' })
      return
    }
    const headers = {
      Authorization: `Bearer ${token}`
    };
    try {
      const response = await axios.get(`${process.env.VUE_APP_API}/protected`, { headers });
      console.log(response.data); // handle response data
    } catch (error) {
      console.error(error); // handle error
      router.push({ path: '/login' })
    }
  },
  created() {
    console.log("created home page", this.auth)
  },
  beforeMount() {
    console.log("beforeMount home page")
  },
  mounted() {
    console.log("mounted home page")
  },
  beforeUpdate() {
    console.log("beforeUpdate home page")
  }
}
</script>

<template>
  <ProfileUpdatePage/>
</template>
