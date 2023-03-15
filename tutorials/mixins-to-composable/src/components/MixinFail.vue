<template>
    <div>
        <button @click="flask('Fail','Attemted Fail','error')">Fail Click </button>
    </div>
</template>
<script>
import flask from "@/mixins/flask.js"
export default{
    mixins:[flask]
}
</script>
<style>
    
</style>