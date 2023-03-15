<template>
    <div>
        <button @click="flask('Fail','Attemted Fail','error')">Fail Click </button>
    </div>
</template>
<script setup>
import useFlask from '../composables/useFlask';

const {flask}=useFlask();
</script>
<style>
    
</style>