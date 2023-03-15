<template>
    <div>
        <button @click="flask('Success','Attempted Success','success')">Success Click </button>
    </div>
</template>
<script >
import flask from '../mixins/flask';
export default{
    mixins:[flask]
}
</script>
<style>
    
</style>