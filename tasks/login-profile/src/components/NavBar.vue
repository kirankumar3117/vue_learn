<template>

    <nav class="nav">
        <div class="left">
            <img src="../assets/m2plogo.png" alt="" class="img" @click="handleHomeClick">
        </div>
        <div class="right">
            <div>
                <router-link to="/MMP" class="col">𝓜𝓪𝓴𝓮 𝓜𝔂 𝓟𝓸𝓻𝓽𝓯𝓸𝓵𝓲𝓸</router-link>
            </div>
            <div>
                <router-link to="/MyPortfolio" class="col"> 𝓜𝔂-𝓟𝓸𝓻𝓽𝓯𝓸𝓵𝓲𝓸</router-link>
            </div>
            <div>𝓛𝓸𝓰𝓲𝓷 𝓢𝓲𝓰𝓷𝓾𝓹</div>
        </div>
    </nav>

</template> 

<script>
import router from '@/router';
import { useProfileStore } from '@/stores/profile';
export default{
    setup(){
        const profileStore=useProfileStore();
        return {
            profileStore
        }
    },
    methods:{
        handleHomeClick(){
            router.push({path:"/"})
        },
        handlePortfolio(){
            this.profileStore.handlePortfolio()
        }
    }
}
</script>

<style scoped>

.nav{
    height:80px;
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    line-height: 5;
    background-color: #0D6EFD;
}
.left{
    width: 50%;
}
.right{
    width:50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.right>div{
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
}
.img{
    width:200px;
    margin-left: 50px;
}
.col{
    color: rgb(36, 35, 35);
    text-decoration: none;
}
.col:hover{
    text-decoration: underline;
}
</style>