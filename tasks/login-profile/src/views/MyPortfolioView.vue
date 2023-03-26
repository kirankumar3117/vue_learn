
import ProfilePage from '@/components/MyPortfolio/ProfilePage.vue';

<template>
    <LoadingSpinner :loading="profileStore.loading"/>
    <div :class="profileStore.loading ? 'loading' : ''">
        <ProfilePage/>
        <SelfIntroPage/>
        <SkillsPage/>
        <ProjectsPage v-if="profileStore.data.projects"/>
        <ContactPage/>

    </div>
</template>

<script>
import ContactPage from "@/components/MyPortfolio/ContactPage.vue";
import ProfilePage from "@/components/MyPortfolio/ProfilePage.vue";
import ProjectsPage from "@/components/MyPortfolio/ProjectsPage.vue";
import SelfIntroPage from "@/components/MyPortfolio/SelfIntroPage.vue"
import SkillsPage from "@/components/MyPortfolio/SkillsPage.vue";
import LoadingSpinner from "@/components/ReusableComponets/LoadingSpinner.vue";
import getUserDetails from "@/mixins/getUserDetails";
import { useProfileStore } from "@/stores/profile";
import axios from "axios";
export default{
    components:{
    ProfilePage,
    SelfIntroPage,
    SkillsPage,
    ProjectsPage,
    ContactPage,
    LoadingSpinner
},
    setup(){
        const profileStore=useProfileStore();
        return{
            profileStore
        }

    },
 
    async created(){
        this.profileStore.loading=true;
        try{
            const res=await axios.get(`${process.env.VUE_APP_API}/getuser/${this.$route.params.id}`);
            this.profileStore.setData(res.data);
            this.profileStore.loading=false;
        }catch(err){
            this.profileStore.loading=false;
        }
    }

}
</script>
<style>
.loading{
    pointer-events: none;
    opacity: 0.4;
    height: 100vh;
    overflow: hidden;
}
</style>    