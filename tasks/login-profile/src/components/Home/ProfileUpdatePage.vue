<template>

    <div class="container">
        <div class="leftContainer">
            <div class="imageContainer">
                <div class="image">
                    <p class="imageName">{{edit==true ? 'Uload image here' : 'click on edit to upload'}}</p>
                </div>
                <input type="file" accept="image/*" class="image imageFile">
            </div>
           
            <div class="nav-edit-logout">
                <div class="edit">
                    <div>
                        <p class="btn btn-primary edit-text" @click="edit=!edit">edit</p>
                    </div>
                    <div :class="edit==false ? 'editToggle mt-2 bgEditFalse mx-3' : 'editToggle mt-2 bgEditTrue mx-3 ' "  @click="edit=!edit">
                        <div :class="edit==false ? 'toggleRoundLeft' : 'toggleRoundRight'"></div>
                    </div>
                </div>
                <div class="logoutContainer">

                    <button class="btn btn-primary " @click="storeUser.logOut">
                        Logout
                    </button>
                </div>
            </div>
            
        </div>
        <div class="info">
            <EditContent/>
        </div>
        
    </div>

</template>

<script>
import {useUserStore} from "@/stores/manageUser"
import {mapState} from "pinia"
import { ref } from "vue";
import EditContent from "./EditContent.vue";
import "../../../public/profile.css"
export default{
    name:'ProfileUpdatePage',
    components:{
        EditContent
    },
   setup(){
    const edit=ref(false)
    const storeUser=useUserStore();
    return {
        storeUser,
        edit
    }
   },
   computed:{
    ...mapState(useUserStore,{
        token:'token'
    })
   }
}
</script>


<style scoped>
    
</style>
