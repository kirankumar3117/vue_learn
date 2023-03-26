<template>
    <LoadingSpinner :loading="storeUser.loading"/>
    <div :id="storeUser.loading ? 'disable' : ''">
      <div  class="logo">
        <div>
          <img src="../../assets/logo.png" alt="" class="img">
        </div>
        <div class="login">
          Login
        </div>
      </div>
    <div class="container d-flex flex-row justify-content-center mt-5">
        <form class="form"  @submit.prevent="storeUser.login">
            <LoginSignUpError text="Login" :error="storeUser.error">
            
            </LoginSignUpError>
          <div class="mb-3">
            <label  class="form-label">Email address</label>
            <input type="email" class="form-control"  aria-describedby="emailHelp" v-model='storeUser.email' required=true/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label  class="form-label">Password</label>
            <input type="password" class="form-control" v-model='storeUser.password' required=true/>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="checkBox"  checked v-model="storeUser.remember"/>
            <label class="form-check-label" for="exampleCheck1">Remember me</label>
          </div>
          <input type="submit" class="w-80 btn btn-primary" value="Submit"/>
        </form>
    </div>
  <br/>
  <br/>
  <LoginSignUpRoute text="New user" path='signup' button="Signup"/>

</div>
 </template>

<!-- Scripting  -->

<script>
import LoginSignUpRoute from '../ReusableComponets/LoginSignUpRoute.vue';
import LoginSignUpError from "../ReusableComponets/LoginSignUError.vue";
import LoadingSpinner from "../ReusableComponets/LoadingSpinner.vue"
import { useUserStore } from '@/stores/manageUser';
export default { 
    components:{
    LoginSignUpRoute,
    LoginSignUpError,
    LoadingSpinner  
    },
    setup(){
        const storeUser=useUserStore();
        return {
            storeUser
        }
    },
   
    beforeUnmount(){
      this.storeUser.error=false
    }
    
 };
</script>

<!-- Styling -->

<style>
.form{
    width:400px;
    margin-top:50px;
}
#disable{
    pointer-events: none;
    opacity: 0.4;
}
.img{
  width:150px;
 
}
.logo{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  top:80px;
  gap:150px;
  margin-left:-50px;
}
.login{
  margin-top:50px;
  font-size: 25px;
  font-weight: bold;
}

</style>