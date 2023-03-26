<template>

    <nav class="nav">
        <div class="left">
            <img src="../assets/m2plogo.png" alt="" class="img" @click="handleHomeClick">
        </div>
        <div class="right">
            <div>
                <div v-if="!profileStore.token" @click="handleFailAuth('Plese Login to edit your portfolio')">
                    MMP
                </div>
                <div v-if="profileStore.token">
                    <router-link to="/MMP" class="col" >MMP</router-link>
                </div>
            </div>
            <div>
                <div v-if="!profileStore.token" @click="handleFailAuth('PLease Login to access My Portfolio')">
                    My Portfolio
                </div>
                <div v-if="profileStore.token && !profileStore.data.name" @click="handleFailAuth('Update Your Portfolio Atleast Once')">
                    My Portfolio
                </div>
                <div v-if="profileStore.token && profileStore.data.name">
                    <div class="col" @click="handleMyPortfolio">My portfolo</div>
                </div>
            </div>
            <div @click="handleUser">{{profileStore.token ? 'Logout' : 'Login'}}</div>
        </div>
    </nav>

</template> 

<script>
import protectedRoute from '@/mixins/protectedRoute';
import router from '@/router';
import { useProfileStore } from '@/stores/profile';
import axios from 'axios';
export default{
    setup(){
        const profileStore=useProfileStore();
        return {
            profileStore
        }
    },
    mixins:[protectedRoute],
    methods:{
        handleHomeClick(){
            router.push({path:"/"})
        },
        handleUser(){
            if(this.profileStore.token){
                if(localStorage.getItem('authToken')){
                    localStorage.removeItem('authToken')
                }else{
                    sessionStorage.removeItem('authToken')
                }
                this.profileStore.token='';
                router.push({path:'/'})
            }
            else{

                router.push({path:"/login"})
            }
        },
        handleFailAuth(str){
            this.profileStore.popupstatus='error'
            this.profileStore.popupcontent= str;
            this.profileStore.popupshow=true;
        },
        async handleMyPortfolio(){
            const headers = {
                Authorization: `Bearer ${this.profileStore.token}`
            };
            const id=await axios.get(`${process.env.VUE_APP_API}/getuserid`,{headers});
           
            router.push({path:`/MMP/${id.data}`})
        }
    }
}
</script>

<style scoped>

.nav{
    height:80px;
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    line-height: 5;
    background-color: #0D6EFD;
}
.left{
    width: 50%;
}
.right{
    width:50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.right>div{
    font-weight: bold;
    cursor: pointer;
}
.img{
    width:150px;
    margin-left: 50px;
}
.col{
    color: rgb(36, 35, 35);
    text-decoration: none;
}
.col:hover{
    text-decoration: underline;
}
</style>