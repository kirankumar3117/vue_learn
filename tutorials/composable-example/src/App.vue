<script setup>
import TabableTextArea from "@/components/TabableTextArea.vue";
import useChanges from "@/composables/useChanges.js";
import {ref } from "vue";


const name=useChanges('name')
const age=useChanges('age','4')


const comment=ref('Hi there')



</script>

<template>
  
  <h1>Welcome !</h1>

    <hr/>

    <p>stooring input data with reactvity on local storage</p>

    <p>Enter your name here :</p>
    <input type="text" v-model="name" placeholder="enter name">
    <input type="text" v-model="age" placeholder="enter age">
    <br/>
    <br/>
    
    <hr/>

    <tabable-text-area v-model="comment" style="backgroundColor:pink">

    </tabable-text-area>
</template>

<style scoped>

</style>
