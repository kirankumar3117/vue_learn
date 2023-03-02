<template>

    <slot name="image">
       
    </slot>

    <slot name="portfolio" :linkName="linkName">
        
    </slot>
</template>

<script>
export default{
    name:'SlotCheck',
    data(){
        return {
            linkName:"kirankumarportfolio"
        }
    } 
}
</script>