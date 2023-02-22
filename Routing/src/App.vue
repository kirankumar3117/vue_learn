<script>
    import TheNavBar from "@/components/TheNavBar.vue"

    export default{
      components:{
        TheNavBar
      }
    }

</script>

<template>

 <TheNavBar/>
  <div class="container">
    <router-view :key="$route.params"></router-view>
  </div>
</template>

<style scoped>

</style>
