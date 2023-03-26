<template>
    <div class="container">

        <div class="main">
            <div>
                <div class="title">Who I Am </div>
                <div class="description">
                   {{ profileStore.data.whoiam }}
                </div>
            </div>
        </div>
        <div class="line"></div>
    </div>
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
.container{
    width:100%;
    align-items: center;
}
.main{
    width:70%;
    display: flex;
    flex-direction: row;
    margin-left:15%;
    margin-top:50px;
}
.title{
    text-align: center;
    font-weight: bold;
    font-size: 30px;
}
.description{
    text-align: center;
    width:70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    color:rgb(102, 102, 102);
}
.line{
    width:60%;
    height:2px;
    background-color: rgb(194, 193, 193);
    margin-left: 20%;
    margin-top:100px;
}
</style>