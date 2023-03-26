<template>
    <div class="profile">
        <div class="left">
            <img :src="!profileStore.data.image ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' : profileStore.data.image" alt="" class="img">
        </div>
        <div class="right">
            <div class="profession">{{profileStore.data.profession}}</div>
            <div class="name">{{profileStore.data.name}}</div>
            <div class="description">{{ profileStore.data.professionaldescription }}</div>
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
    height:250px;
    border-radius: 50%;
}
.left{
    width:30%;

}
.right{
    width:60%;
    margin-left: -100px;
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
    width:100%;
    text-align: left;
    margin-top: 20px;
    color:rgb(102, 102, 102);
}
</style>