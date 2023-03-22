<template>

<h1>{{count}}</h1>
<!-- <h1>{{storeCount}}</h1> -->

<div>
    <button class="btn btn-danger" @click="decreaceCounter">-</button> | 
    <button class="btn btn-danger" @click="increaceCounter"> +</button>
</div>


<br/>
    <button class="btn btn-primary" @click="goBackToLogin">
        Signout
    </button>
</template>
<script>
import router from '@/router';
import { useLoginStore } from '@/stores/login';
export default{
    name:'ProfileUpdatePage',
    
   setup(){
    const {count}=useLoginStore();

    return {
        count
    }
   },
    methods:{

       goBackToLogin(){
        let token=localStorage.getItem("authToken");

        if(token){



            localStorage.removeItem('authToken')
        }
        else{

            sessionStorage.removeItem('authToken');
        }


            router.push({path:'/login'})
        },
        increaceCounter(){
            this.count+=1;
        },
        decreaceCounter(){
            this.count-=1;
        }
    }
}
</script>


