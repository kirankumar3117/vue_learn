<template>

<div class="container d-flex flex-row justify-content-center mt-5">
  
  <form class="form" >
      <h1>SignUp</h1>
    <div class="mb-3">
      <label  class="form-label">Email address</label>
      <input type="email" class="form-control"  aria-describedby="emailHelp" v-model='email' placeholder="name@gmail.com"/>
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label  class="form-label">Password</label>
      <input type="password" class="form-control" v-model='password' placeholder="enter passoerd here"/>
    </div>
    <div class="mb-3">
      <label  class="form-label">Re-enter Password</label>
      <input type="password" class="form-control" v-model='repassword' placeholder="re-enter passord here"/>
    </div>
    <button type="submit" class="btn btn-primary" @click="getDetails">Submit</button>
  </form>
</div>
<div class="form container d-flex flex-row justify-content-around"><p>Already a user </p><button class="btn btn-primary"><router-link class="text-white" to="/login">Login</router-link></button></div>
</template>



<script>
export default{
    name:'SignUpPage',
    data(){
        return {
            email:'',
            password:'',
            repassword:''
        }
    },
    methods:{
       async getDetails(e){
           e.preventDefault();
        
               const res=await fetch(`http://localhost:3000/userData?email=${this.email}`);
               const resdata=await res.json()
               if(resdata.length===0){
                let data={
                'email':`${this.email}`,
                'password':`${this.password}`,
                }
                 if(this.password===this.repassword){

                    await fetch("http://localhost:3000/userData",{
                        method:'POST',
                        headers:{
                            'Content-type':'application/json'
                        },
                        body:JSON.stringify(data)
                    })
                    // const resdata=await res.json()
                   alert('registered successfully !')
                }

               }else{
                alert('User Already exist')
               }
          
            
            // if(this.password===this.repassword){

                // const res=await fetch("http://localhost:3000/userData",{
                //     method:'POST',
                //     headers:{
                //         'Content-type':'application/json'
                //     },
                //     body:JSON.stringify(data)
                // })
                // const resdata=await res.json()
                // console.log(resdata)
            // }

            }
    }
}
</script>