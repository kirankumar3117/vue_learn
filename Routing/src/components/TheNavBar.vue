<template>

<div id="nav">
    <router-link to="/">Travel-App</router-link>
    <router-link v-for="destination in destinations" :key="destination.id" :to="{name:'destination.show',params:{id:destination.id}}">
                {{ destination.name }}
               
            </router-link>
  </div>
</template>

<script>

import sourceData from "@/data.json"
export default{
    data(){
        return {
            destinations:sourceData.destinations
        }
    }
}
</script>

<style>
#nav .travel-destination{
    color:red;
    border-bottom:2px solid rgb(133, 39, 39);
}
</style>