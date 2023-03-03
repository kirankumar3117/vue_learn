<template>
    <br/>
    <button @click="incrementCounter">count is {{ count }}</button>
</template>

<script>
import CounterIncrement from "@/mixins/Counter.js"
    export default{
        name:'CounterButton',
        mixins:[CounterIncrement]
    }
</script>