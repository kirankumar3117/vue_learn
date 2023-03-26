
import ProfilePage from '@/components/MyPortfolio/ProfilePage.vue';

<template>
    <ProfilePage/>
    <SelfIntroPage/>
    <SkillsPage/>
    <ProjectsPage/>
    <ContactPage/>
</template>

<script>
import ContactPage from "@/components/MyPortfolio/ContactPage.vue";
import ProfilePage from "@/components/MyPortfolio/ProfilePage.vue";
import ProjectsPage from "@/components/MyPortfolio/ProjectsPage.vue";
import SelfIntroPage from "@/components/MyPortfolio/SelfIntroPage.vue"
import SkillsPage from "@/components/MyPortfolio/SkillsPage.vue";
import router from "@/router";
import { useProfileStore } from "@/stores/profile";
export default{
    components:{
    ProfilePage,
    SelfIntroPage,
    SkillsPage,
    ProjectsPage,
    ContactPage
},
    setup(){
        const profileStore=useProfileStore();
        return{
            profileStore
        }

    },

    created(){
        if(!this.profileStore.updated){
            router.push({path:'/'})
        }
    }

}
</script>