

<template>
    <MmpSOne/>
    <MmpSTwo/>
    <MmpSThree/>
    <MmpSFour/>
    <MmpSFive/>
    <br/>
    <button class="update btn btn-danger" @click="profileStore.updateData">Update</button>
</template>
<script>
import MmpSOne from './MMP/MmpSOne.vue';
import MmpSTwo from './MMP/MmpSTwo.vue';
import MmpSThree from "./MMP/MmpSThree.vue";
import MmpSFour from "./MMP/MmpSFour.vue";
import MmpSFive from "./MMP/MmpSFive.vue";
import { useProfileStore } from '@/stores/profile';

export default{
    
    components:{
    MmpSOne,
    MmpSTwo,
    MmpSThree,
    MmpSFour,
    MmpSFive
},
    setup(){
        const profileStore=useProfileStore();
        return{
            profileStore
        }
    },
    created(){
        
    }
}
</script>
<style>
.update{
    padding:8px 20px;
    font-weight: bold;
    margin-left:48%;
    margin-bottom: 50px;
}
</style>