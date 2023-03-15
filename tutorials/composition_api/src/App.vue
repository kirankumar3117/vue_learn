<script setup>
import {onMounted} from "vue";

// just have to add $ref
let message=$ref('Hello world !');

setTimeout(()=>{
  // we can directly change value 
  message="hello world with setTimeout !"
},3000)

onMounted(() => {
  alert("component Mounted")
})

</script>

<template>
 
  <h1>Welocome !</h1>

  <p>showing declarative rendering with setup (composition)</p>

  <p>{{ message }}</p>
</template>

<style scoped>

</style>
