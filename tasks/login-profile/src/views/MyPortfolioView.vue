
import ProfilePage from '@/components/MyPortfolio/ProfilePage.vue';

<template>
    <ProfilePage/>
    <SelfIntroPage/>
    <SkillsPage/>
    <ProjectsPage/>
</template>

<script>
import ProfilePage from "@/components/MyPortfolio/ProfilePage.vue";
import ProjectsPage from "@/components/MyPortfolio/ProjectsPage.vue";
import SelfIntroPage from "@/components/MyPortfolio/SelfIntroPage.vue"
import SkillsPage from "@/components/MyPortfolio/SkillsPage.vue";
export default{
    components:{
    ProfilePage,
    SelfIntroPage,
    SkillsPage,
    ProjectsPage
}
}
</script>