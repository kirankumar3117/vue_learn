
import ProfilePage from '@/components/MyPortfolio/ProfilePage.vue';

<template>
    <ProfilePage/>
    <SelfIntroPage/>
</template>

<script>
import ProfilePage from "@/components/MyPortfolio/ProfilePage.vue";
import SelfIntroPage from "@/components/MyPortfolio/SelfIntroPage.vue"
export default{
    components:{
        ProfilePage,
        SelfIntroPage
    }
}
</script>