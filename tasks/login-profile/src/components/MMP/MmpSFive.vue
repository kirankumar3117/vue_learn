<template>
    <div class="session1">
        <div class="left">
            <label for="">E-Mail : </label>
            <input type="text" class="form-control" v-model="profileStore.data.email" disabled>
            <label for="">Mobile No* : </label>
            <input type="text" class="form-control" v-model="profileStore.data.mobileno">
            <label for="">LinkedIn : </label>
            <input type="text" class="form-control" v-model="profileStore.data.linkedin">
            <label for="">Github : </label>
            <input type="text" class="form-control" v-model="profileStore.data.github">
        </div>
        <div class="right">
            <ContactPage/>
        </div>
    </div>

    <div class="line"></div>
</template>


<script>
import { useProfileStore } from '@/stores/profile';
import ContactPage from '../MyPortfolio/ContactPage.vue';
export default{
    setup() {
        const profileStore = useProfileStore();
        return {
            profileStore
        };
    },
    components: { ContactPage }
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
    border-radius: 3rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.right{
    width:650px;
    border: 1px solid black;
    height:400px;
}
.line{
    width:60%;
    height:2px;
    background-color: rgb(194, 193, 193);
    margin-left: 15%;
    margin-top:80px;
}
</style>