<template >
  <div>

    <LoadingSpinner :loading="storeUser.loading"/>

    <div :id="storeUser.loading ? 'disable' : ''">
      <div  class="logo">
        <div>
          <img src="../../assets/logo.png" alt="" class="img">
        </div>
        <div class="login">
          SignUp
        </div>
      </div>
    <div class="container d-flex flex-row justify-content-center mt-5 ml-auto mr-auto" >
      
      <form class="form" @submit.prevent="storeUser.signup">
          <LoginSignUpError  :error="storeUser.error"/> 
        <div class="mb-3">
          <label  class="form-label">Email address</label>
          <input type="email" class="form-control"  aria-describedby="emailHelp" v-model='storeUser.email' placeholder="name@gmail.com" required="true"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label  class="form-label">Password</label>
          <input type="password" class="form-control" v-model='storeUser.password' placeholder="enter password here" required=true/>
        </div>
        <div class="mb-3">
          <label  class="form-label">Re-enter Password</label>
          <input type="password" class="form-control" v-model='storeUser.repassword' placeholder="re-enter password here" required="true">
        </div>
        <input type="submit" class="btn btn-primary"  value="submit">
      </form>
    </div>
    <br/>
    <br/>
    <LoginSignUpRoute text='Already a user' path="login" button='Login'/>
</div>



</div>


</template>


<script>
import LoginSignUpRoute from '../ReusableComponets/LoginSignUpRoute.vue';
import LoginSignUpError from '../ReusableComponets/LoginSignUError.vue';
import LoadingSpinner from "../ReusableComponets/LoadingSpinner.vue"
import { useUserStore } from '@/stores/manageUser';
export default {
    name:'SignUpPage',
    components: {
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
     created(){
        this.storeUser.email='',
        this.storeUser.password='',
        this.storeUser.repassword=''
     }
}
</script>


<style >

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