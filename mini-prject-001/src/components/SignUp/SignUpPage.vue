<template >
  <div>

    <LoadingSpinner :loading="loading"/>

    <div :id="loading ? 'disable' : ''">
    <div class="container d-flex flex-row justify-content-center mt-5 ml-auto mr-auto" >
      
      <form class="form" >
          <LoginSignUpError text="SignUp" :error="error"/>
        <div class="mb-3">
          <label  class="form-label">Email address</label>
          <input type="email" class="form-control"  aria-describedby="emailHelp" v-model='email' placeholder="name@gmail.com"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label  class="form-label">Password</label>
          <input type="password" class="form-control" v-model='password' placeholder="enter password here"/>
        </div>
        <div class="mb-3">
          <label  class="form-label">Re-enter Password</label>
          <input type="password" class="form-control" v-model='repassword' placeholder="re-enter password here"/>
        </div>
        <button type="submit" class="btn btn-primary" @click="getDetails">Submit</button>
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
import router  from '@/router/index.js';

export default {




    name:'SignUpPage',
    components: {
         LoginSignUpRoute,
         LoginSignUpError,
         LoadingSpinner
     },
    data(){
        return {
            email:'',
            password:'',
            repassword:'',
            error:false ,
            loading:false
        }
        
    },
    methods:{
       async getDetails(e){
           e.preventDefault();

          

           

            if(this.email=='' || this.password=='' || this.repassword=='' || (this.password!=this.repassword) || !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(this.email)){

                this.error=true;
                this.password=''
                this.repassword=''
                return 
              }
        
               const res=await fetch(`http://localhost:3000/userData?email=${this.email}`);
               const resdata=await res.json()
               if(resdata.length===0){
                let data={
                'email':`${this.email}`,
                'password':`${this.password}`,
                }
               
                await fetch("http://localhost:3000/userData",{
                    method:'POST',
                    headers:{
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify(data)
                })
                this.loading=true
                setTimeout(()=>{
                  this.loading=false
                  router.push({ path: '/login' })
                },1000)
                
               }else{
                    this.error=true;
                    this.password='';
                    this.repassword='';
               }
          
            
          
            }
    }

    
}


</script>


<style >

#disable{
    pointer-events: none;
    opacity: 0.4;
}


</style>