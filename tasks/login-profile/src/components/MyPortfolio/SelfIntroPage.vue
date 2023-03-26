<template>
    <div class="main">
        <div>
            <div class="title">Who I Am </div>
            <div class="description">
               {{ profileStore.data.whoiam }}
            </div>
        </div>
    </div>
    <div class="line"></div>
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

<style>
.main{
    width:70%;
    display: flex;
    flex-direction: row;
    margin-left:15%;
    margin-top:50px;
}
.title{
    font-weight: bold;
    font-size: 30px;
}
.description{
    width:70%;
    margin-top: 10px;
    color:rgb(102, 102, 102);
}
.line{
    width:60%;
    height:2px;
    background-color: rgb(194, 193, 193);
    margin-left: 15%;
    margin-top:30px;
}
</style>