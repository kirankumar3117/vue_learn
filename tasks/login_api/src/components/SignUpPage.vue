<template>
    <div>
        <h1>Sign Up Page !</h1>
        <form action="" class="d-flex flex-column" style="width:350px;" @submit="handleSubmit">
            <label>email : </label>
            <input type="text" placeholder="enter your mail" name="email">
            <label>password : </label>
            <input type="text" placeholder="enter your password" name="password" >
            <label>re-enter password : </label>
            <input type="text" placeholder="re-enter password" name="repassword">
            <br/>
            <input type="submit" value="Signup">
        </form>
    </div>
</template>
<script>
export default {
    methods:{
        handleSubmit(e){
            console.log(e.target[0].name)
            console.log(e.target[1].name)
            console.log(e.target[2].name)
            e.preventDefault()
        }
    }
}
</script>
<style>

</style>