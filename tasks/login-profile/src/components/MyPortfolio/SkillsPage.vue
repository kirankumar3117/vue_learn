<template>
    <div class="main">
        <div>
            <div class="title">Skills</div>
            <div class="skills">
                <div v-for="skill in profileStore.data.skills" :key="skill" class="skill">{{ skill }}</div>
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
        return{
            profileStore
        }
    }
}
</script>

<style scoped>
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
.skill{
    border:1px solid rgb(131, 130, 130);
    padding:10px;
    border-radius: 7px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.skills{
    width:80%;
    margin-top: 20px;
    display:flex;
    flex-wrap: wrap;
    gap:10px;
}
.line{
    width:60%;
    height:2px;
    background-color: rgb(194, 193, 193);
    margin-left: 15%;
    margin-top:30px;
}
</style>