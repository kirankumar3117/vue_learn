<script setup>
import CustomButton from './components/CustomButton.vue';
import {inject} from "vue"
const logout=inject('logout')
</script>

<template>

<hr/>
<h1>Vue Plugin </h1>

<custom-button title="Login"></custom-button>

<hr/>

<p>Checking v-cutom-directives with font size</p>


<p v-font-size:small>Small</p>
<p v-font-size:medium>Medium</p>
<p v-font-size:large>Large</p>
<p v-font-size>Normal</p>

<hr/>

<p>Checking global mixin</p>

<a :href="portfolioLink" target="_blank">{{ portfolioLink }}</a>

<hr/>

<p>Provide and inject from vue</p>

<custom-button title="Log Out" @click="logout"></custom-button>

</template>

<style scoped>

</style>
