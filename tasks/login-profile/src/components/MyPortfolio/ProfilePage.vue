<template>
    <div class="profile">
        <div class="left">
            <img :src="profileStore.image" alt="" class="img">
        </div>
        <div class="right">
            <div class="profession">{{profileStore.profession}}</div>
            <div class="name">{{profileStore.name}}</div>
            <div class="description">{{ profileStore.professionaldescription }}</div>
        </div>
    
    </div>

    <div class="profileLine"></div>
</template>

<script>
import { useProfileStore } from '@/stores/profile';
export default{
    setup(){
        const profileStore=useProfileStore();
        return {
            profileStore
        }
    }
}
</script>

<style scoped>
.profile{
    width:70%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left:10%;
    margin-top:100px;
}
.img{
    width:250px;
    border-radius: 50%;
}
.left{
    width:30%;

}
.right{
    width:60%;
}
.profileLine{
    width:60%;
    height:2px;
    background-color: rgb(194, 193, 193);
    margin-left: 15%;
    margin-top:30px;
}
.profession{
    font-weight: bold;
    color: rgb(116, 114, 114);
    font-size: 20px;
}
.name{
    font-weight: bold;
    font-size: 30px;
}
.description{
    width:70%;
    text-align: left;
    margin-top: 20px;
    color:rgb(102, 102, 102);
}
</style>