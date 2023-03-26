<template>
    <div class="session1">
        <div class="left">
            <label for="">Name* : </label>
            <input type="text" class="form-control" v-model="profileStore.data.name">
            <label for="">Proffesion* : </label>
            <input type="text" class="form-control" v-model="profileStore.data.profession" >
            <label for="">Description*: </label>
            <textarea name="" id="" cols="30" rows="3" class="form-control" v-model="profileStore.data.professionaldescription"></textarea>
            <label for="">Profile Image : </label>
            <input type="file" accept="image/*" class="form-control" @change="handleImageUrl">
            <br/>
            <p>Uploade image under 50kb</p>
        </div>
        <div class="right">
            <ProfilePage/>
        </div>
    </div>

    <div class="line"></div>
</template>

<script>
import { useProfileStore } from '@/stores/profile';
import ProfilePage from '../MyPortfolio/ProfilePage.vue';
export default{
    setup() {
        const profileStore = useProfileStore();
        return {
            profileStore
        };
    },
    components: { ProfilePage },
    methods:{
        handleImageUrl(e){
            console.log(e.target.files[0])
            const file=e.target.files[0];
            const reader=new FileReader();
            reader.addEventListener("load",()=>{
                this.profileStore.data.image=reader.result;
                console.log(reader.result)
            })

            reader.readAsDataURL(file);
        }
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
    border-radius: 3rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.right{
    width:650px;
    height:400px;
    overflow: auto;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
.line{
    width:60%;
    height:2px;
    background-color: rgb(194, 193, 193);
    margin-left: 15%;
    margin-top:80px;
}
</style>