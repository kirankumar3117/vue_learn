

<template>
    <div class="session2">
        <div class="left">
            <label for="">Tell About Yourself : </label>
            <textarea name="" id="" cols="30" rows="10" class="form-control" v-model="profileStore.whoiam"></textarea>
        </div>
        <div class="right">
            <SelfIntroPage/>
        </div>
    </div>

    <div class="line"></div>
</template>
<script>
import SelfIntroPage from '../MyPortfolio/SelfIntroPage.vue';
import { useProfileStore } from '@/stores/profile';
export default{
    components:{
        SelfIntroPage
    },
    setup(){
        const profileStore=useProfileStore();
        return{
            profileStore
        }
    }
}

</script>
<style scoped>
.session2{
    display: flex;
    width:100%;
    flex-direction: row-reverse;
    justify-content: space-around;
    margin-top:80px;
    margin-left: auto;
    margin-right: auto;
}

.left{
    width:350px;
    padding: 50px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 3rem;
}
.right{
    width:650px;
    height:400px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
.line{
    width:60%;
    height:2px;
    background-color: rgb(194, 193, 193);
    margin-left: 15%;
    margin-top:80px;
}
</style>