import { defineStore } from "pinia"
import router from "@/router"
import axios from 'axios'
export const useUserStore=defineStore('user',{
    state:()=>({
        token:localStorage.getItem("authToken") || sessionStorage.getItem("authToken") || null,
        email:'',
        password:'',
        repassword:'',
        remember:true,
        error:false,
        loading:false
    }),
    actions:{
        async login(){
            this.loading=true;
            try{
                const response = await axios.post(`${process.env.VUE_APP_API}/login`,{
                    email:this.email,
                    password:this.password
                })
                const token = response.data.token;
                // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                
                if(this.remember){
                    localStorage.setItem('authToken',token);
                }else{
                    sessionStorage.setItem('authToken', token);
                }
                this.token=token
                this.password='',
                this.loading=false,
                this.email=''
                router.push({path:'/'})
            }catch(err){
                this.error=true;
                this.password='';
                this.email='';
                this.loading=false;
            }

        },
        logOut(){
        
        localStorage.getItem("authToken") ? localStorage.removeItem("authToken") : sessionStorage.getItem("authToken") ? sessionStorage.removeItem("authToken") : null
            router.push({path:'/login'})
        },

        
         async signup(email,password,repassword){
            if(this.password != this.repassword){
                this.error=true;
                this.password='';
                this.repassword='';
                return;
            }
            this.loading=true;
            this.error=false;
            try{
              const res=await axios.post(`${process.env.VUE_APP_API}/register`,{
                email:this.email,
                password:this.password,
                
              })
              console.log(res.data);
                       this.loading=false;
                       this.email='',
                       this.password=''
                       this.repassword=''
                      router.push({ path: '/login' })
            }catch(err){
              console.log({message:err.message});
                        this.error=true;
                        this.password='';
                        this.repassword='';
                        this.loading=false;
            }
        }



    }
})