


<template>
    <LoadingSpinner :loading="profileStore.loading"/>
    <div :class="profileStore.loading || profileStore.popupshow ? 'loading' : ''">

        <NavBar/>
        <MMPEditPage />
    </div>
</template>

<script>
import MMPEditPage from '@/components/MMPEditPage.vue';
import NavBar from '@/components/NavBar.vue';
import LoadingSpinner from '@/components/ReusableComponets/LoadingSpinner.vue';
import { useProfileStore } from '@/stores/profile';
import getUserDetails from "@/mixins/getUserDetails"
import axios from 'axios';
export default{
    components:{
    NavBar,
    MMPEditPage,
    LoadingSpinner
},
mixins:[getUserDetails],
setup(){
    const profileStore=useProfileStore();
    return{
        profileStore
    }
},
created(){
    this.profileStore.mmpprojectremove=true;
    this.getUserData();
    
},
beforeUnmount(){
    this.profileStore.mmpprojectremove=false
},
}
</script>

<style>
.loading{
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
    opacity: 0.4;
}
</style>