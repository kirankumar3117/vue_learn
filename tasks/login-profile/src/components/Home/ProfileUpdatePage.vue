<template>

    <div class="container">
        <div>
            <div>
                <div class="image">
                    <p class="imageName">Upload image here</p>
                </div>
                <input type="file" accept="image/*" class="image imageFile">
            </div>
            <div >
                <div>
                    <p class="btn btn-primary">edit</p>

                    <div class="editToggle">
                        <div class="toggleRoundRight"></div>
                    </div>
                   
                </div>
                <button class="btn btn-primary" @click="storeUser.logOut">
                    Logout
                </button>

            </div>
        </div>
        <div class="info">
            <form action="">
                <label for="">Email :</label>
                <input type="text" class="form-control">
                <label for="" >Adhar No :</label>
                <input type="text" class="form-control">
                <label for="">PAN No : </label>
                <input type="text" class="form-control">
                <label for="">Mobile No :</label>
                <input type="text" class="form-control">
                <label for="">Native Address : </label>
                <input type="text" class="form-control">
                <div>
                    <label for="" class="form-check-label">Use it for current address  </label>
                    <input type="checkbox" name="" id="" class="form-check-input mx-2 my-1">
                </div>
                <label for="">Skills :</label>
                <input type="text" class="form-control">

            </form>
        </div>
    </div>

</template>
<style scoped>
.container{
    display: flex;
    width:80%;
    border: 1px solid red;
    margin-top: 30px;
    flex-direction: row;
    justify-content: space-around;
}
.image{
    width:250px;
    height:250px;
    border: 1px solid rgb(170, 169, 169);
    border-radius: 50%;
    background-color: rgb(247, 245, 245);
}
.imageName{
    position: relative;
    left:60px;
    top:110px;
    color:rgb(158, 155, 155)
}
.editToggle{
    width:50px;
    height:20px;
    border:1px solid black;
    background-color: #0D6EFD;
    border-radius: 7rem;
    text-align: right;
}
.toggleRoundLeft{
    width:40%;
    height:100%;
    background-color: white;
    border-radius: 50%;
}
.toggleRoundRight{
    width:40%;
    height:100%;
    background-color: white;
    border-radius: 50%;
    margin-left: 60%;
}
.imageFile{
    position: relative;
    top:-250px;
    opacity: 0;
}
.info{
    display: flex;
    flex-direction: column;
}

</style>
<script>
import {useUserStore} from "@/stores/manageUser"
import {mapState} from "pinia"
export default{
    name:'ProfileUpdatePage',
   setup(){
    const storeUser=useUserStore();
    return {
        storeUser
    }
   },
   computed:{
    ...mapState(useUserStore,{
        token:'token'
    })
   }
}
</script>


