<template>
  <NavBar/>
<!-- <div class="container d-flex flex-wrap justify-content-center mt-5" style="gap:10px">
 <CardItem/>
 <CardItem/>
 <CardItem/>
 <CardItem/>
</div> -->

<router-view></router-view>

</template>

<script>
// import CardItem from '@/components/Card.vue'
import NavBar from '@/components/Nav.vue'
export default {
  name: 'App',
  components: {
    // CardItem,
    NavBar
  }
}
</script>

<style>

</style>
