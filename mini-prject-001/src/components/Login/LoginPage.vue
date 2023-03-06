<template>
    <LoadingSpinner :loading="loading"/>
    <div :id="loading ? 'disable' : ''">
    <div class="container d-flex flex-row justify-content-center mt-5">
        <form class="form" >
            <LoginSignUpError text="Login" :error="error"/>
          <div class="mb-3">
            <label  class="form-label">Email address</label>
            <input type="email" class="form-control"  aria-describedby="emailHelp" v-model='email' required=true/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label  class="form-label">Password</label>
            <input type="password" class="form-control" v-model='password'/>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"  checked/>
            <label class="form-check-label" for="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" class="w-80 btn btn-primary" @click="getDetails">Submit</button>
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
import router  from '@/router/index.js';
export default { 


    components:{
    LoginSignUpRoute,
    LoginSignUpError,
    LoadingSpinner
},
    data(){
        return {
            email:'',
            password:'',
            error:false,
            loading:false
        }
    },
    methods:{
        async getDetails(e){
           e.preventDefault();

        
           function login() {
  
            sessionStorage.setItem("token", "data.token")
         
             }

             login()
        
    

           
           if(this.emial=='' || this.password=='' || !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(this.email)){
                this.error=true;
                this.password=''
                return
           }
            const res=await fetch(`http://localhost:3000/userData?email=${this.email}`);
            const resdata=await res.json()
            if(resdata.length==0){
                this.error=true;
                this.password=''
                return
            }
            else{
                if(resdata[0].password==this.password && resdata[0].email==this.email){
                    this.loading=true;
                    setTimeout(()=>{

                        localStorage.setItem("email",JSON.stringify(this.email));
                        this.loading=false;
                        router.push({path:'/'})
                    },1000)
                    
                }
            }
        }
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


</style>