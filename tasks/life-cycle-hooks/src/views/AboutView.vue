<template>
  <div class="about">
    <h1>This is an about page</h1>

    <input type="text" name="" v-model="login" id=""/>
    <button @click="loginButton">login</button>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        login:''
      }
    },
    beforeUpdate(){
      console.log("before Update ",this.login)
    },
    updated(){
      console.log("updates",this.login)
    },
    beforeDestroy(){
      console.log("Component Before Destroyed App");
    },
    destroyed(){
      console.log("Component Destroyed App")
    },
    beforeRouteEnter(to,from ,next){
      console.log("Entered to app")
      next()
    },
    beforeRouteLeave(to,from,next){
      console.log("Leaves the route")
      next()
    },
    methods:{
      loginButton(){
        console.log(this.login)
      }
    }
  }
</script>