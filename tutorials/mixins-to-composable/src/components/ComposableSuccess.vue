<template>
    <div>
        <button @click="flask('Success','Attempted Success','success')">Success Click </button>
    </div>
</template>
<script setup>
import useFlask from '../composables/useFlask';
const {flask} =useFlask();
</script>
<style>
    
</style>