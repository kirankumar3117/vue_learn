<template>
    <br/>
    <h2 @mouseover="incrementCounter">Hover is {{ count }}</h2>
</template>

<script>
import CounterIncrement from "@/mixins/Counter.js"

    export default{
        name:'HoverCount',
        mixins:[CounterIncrement]
    }
</script>