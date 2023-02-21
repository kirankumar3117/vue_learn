<template>

    <button @click="onClick" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script>
export default{
    name:'Button', 
    props:{
        text:String,
        color:String,
    },
    components:{},
    methods:{
        onClick(){
            this.$emit('btn-click')
        }
    }
}
</script>
<style scoped>
button{
    width:150px;
}
</style>