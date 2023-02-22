<template>
    <div class="home">

        <h1>All destinations</h1>

        <div class="destinations">

            <router-link v-for="destination in destinations" :key="destination.id" :to="{name:'destination.show',params:{id:destination.id}}">
                <h3>{{ destination.name }}</h3>
                <img :src="`/images/${destination.image}`" :alt="destination.name"/>
            </router-link>
        </div>
    </div>
</template>

<script>
import sourceData from "../data.json"

export default{

    data(){
        return {
            destinations:sourceData.destinations
        }
    }
}
</script>