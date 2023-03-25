

<template>
    <MmpSOne/>
    <MmpSTwo/>
    <MmpSThree/>
    <MmpSFour/>
    <MmpSFive/>
    <br/>
    <button class="update btn btn-danger">Update</button>
</template>
<script>
import MmpSOne from './MMP/MmpSOne.vue';
import MmpSTwo from './MMP/MmpSTwo.vue';
import MmpSThree from "./MMP/MmpSThree.vue";
import MmpSFour from "./MMP/MmpSFour.vue";
import MmpSFive from "./MMP/MmpSFive.vue";

export default{
    
    components:{
    MmpSOne,
    MmpSTwo,
    MmpSThree,
    MmpSFour,
    MmpSFive
}
}
</script>
<style>
.update{
    padding:8px 20px;
    font-weight: bold;
    margin-left:48%;
}
</style>