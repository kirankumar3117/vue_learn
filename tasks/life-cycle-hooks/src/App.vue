<script>
import { RouterLink, RouterView } from 'vue-router'

export default{
  data(){
    return {
      check:true
    }
  },
  beforeCreate(){
    console.log("COMPONENT BEFORE CREATED",this)
  },
  created(){
    console.log("Component created",this.check)
  },
  beforeMount(){
    console.log("Compnent Before Mount",this.check);
  },
  mounted(){
    console.log("Component Mounted",this.check);
  },
 beforeDestroy(){
  console.log("Component Before Destroyed App");
 },
 destroyed(){
  console.log("Component Destroyed App")
 }


}
</script>

<template>
  

      <nav>
        <RouterLink to="/">Home</RouterLink> | 
        <RouterLink to="/about">About</RouterLink>
      </nav>

  <RouterView />
</template>

<style scoped>

</style>
