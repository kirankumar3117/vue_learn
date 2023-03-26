<template>

   <div>
        <div class="logo">
            <div >Make your Portfolio and share it with others</div>
        </div>

        <div class="buttons">
            <button class="btn btn-primary" @click="handleFailAuth">{{ profileStore.token ? 'start editing your portfolio' : 'Start Making Your Portfolio'}}</button>
            <button class="btn btn-primary" v-show="profileStore.token && profileStore.updated">My portfolio</button>
        </div>
   </div>
</template>

<script>
import router from '@/router';
import { useProfileStore } from '@/stores/profile';
export default{
    components:{
       
    },
   setup(){
    const profileStore=useProfileStore();
    return{
        profileStore
    }
   },
   computed:{
    
   },
   methods:{
    handleFailAuth(){
        if(!this.profileStore.token){

            this.profileStore.popupcontent='Please Login to start making your Portfolio'
            this.profileStore.popupstatus='error'
            this.profileStore.popupshow=true
        }
        else{
            router.push({path:'/MMP'})
        }
    }
   }
}
</script>


<style scoped>
.logo{
    /* padding: 20px; */
    margin-left: auto;
    margin-right: auto;
}
    .img{
        width:100px;    
    }
    .buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap:10px;
        margin-top:150px;
    }
    
</style>
