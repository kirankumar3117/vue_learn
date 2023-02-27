<template>
<div class="container d-flex flex-row justify-content-center mt-5">
  
    <form class="form" >
        <h1>Login</h1>
      <div class="mb-3">
        <label  class="form-label">Email address</label>
        <input type="email" class="form-control"  aria-describedby="emailHelp" v-model='email'/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label  class="form-label">Password</label>
        <input type="password" class="form-control" v-model='password'/>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
      </div>
      <button type="submit" class="btn btn-primary" @click="getDetails">Submit</button>
    </form>
</div>
<div class="form container d-flex flex-row justify-content-around"><p>New user</p><button class="btn btn-primary"><router-link class="text-white" to="/signup">SignUp</router-link></button></div>
</template>

<style>
.form{
    width:400px;
    margin-top:50px;
}
</style>

<script>
export default{
    name:'LoginPage',
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        async getDetails(e){
           e.preventDefault();
           
            const res=await fetch(`http://localhost:3000/userData?email=${this.email}`);
            const resdata=await res.json()
            if(resdata.length==0){
                alert('Wrong details entered..?')
            }
            else{
                if(resdata[0].password==this.password && resdata[0].email==this.email){
                    alert('login successfull')
                    
                }
            }

        }
    }
}
</script>