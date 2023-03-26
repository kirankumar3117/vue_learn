
import SkillsPage from '../MyPortfolio/SkillsPage.vue';

<template>
    <div class="session1">
        <div class="left">
            <label for="">skill* : </label>
           
            <input type="text" class="form-control" v-model="profileStore.skill">
            <br/>
            <button class="btn btn-primary" @click="profileStore.addSkill">add</button>
            
            <div class="skills">
                <div v-for="skill in profileStore.skills" :key="skill" class="rmskill">
                    <div class="mx-2">{{ skill }}</div>
                    <div class="remove" @click="profileStore.removeSkill(skill)">remove</div>
                </div>
            </div>
        </div>
        <div class="right">
            <SkillsPage/>
        </div>
    </div>

    <div class="line"></div>
</template>
<script>
import { useProfileStore } from '@/stores/profile';
import SkillsPage from "@/components/MyPortfolio/SkillsPage.vue"
export default{
    setup(){
        const profileStore=useProfileStore();
        return {
            profileStore
        }
    },
    components:{
        SkillsPage
    }
}
</script>
<style scoped>
.session1{
    display: flex;
    width:100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top:50px;
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
.skills{
    margin-top:10px;
    height:250px;
    overflow: auto;
}
.noskills{
    font-size: small;
    margin-left:10px;
    color:rgb(99, 97, 97);
}
.line{
    width:60%;
    height:2px;
    background-color: rgb(194, 193, 193);
    margin-left: 15%;
    margin-top:80px;
}
.rmskill{
    border:1px solid rgb(90, 89, 89);
    border-radius: 7px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.remove{
    margin-right: 5px;
    cursor: pointer;
}
</style>