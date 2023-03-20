<template>
    <h1>congrats ! you have scuucesssfully signed in</h1>
    <button class="btn btn-primary" @click="goBackToLogin">
        Signout
    </button>
</template>
<script>
import router from '@/router';
const goBackToLogin=()=>{
    router.push({path:'/login'})
}
</script>


