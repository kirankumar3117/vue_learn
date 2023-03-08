
<script>
// import ProgressBar from "@/components/ProgressBar.vue"
  export default{
    name:'SignUpPhone',
    components:{
      // ProgressBar
    },
    props:{
        otpInputEmpty:Boolean
    },
    data(){
      return {

        phone:true,
        phoneNumber:''
      }
    },
   
    methods:{
      handleSubmit(){
        this.$emit('submited-mobile',this.phoneNumber)
      }
    },
    updated(){
      console.log("hello")
      console.log(this.phoneNumber)
      if(this.otpInputEmpty){
        this.phoneNumber=''
       console.log(this.phoneNumber)
       }
    }
  }
</script>

<template>
  <div>

    <div class="container">
   
   
     <!-- <ProgressBar :phone="phone"/> -->
   
     <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-phone-vibrate mt-5" viewBox="0 0 16 16">
       <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z"/>
       <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z"/>
     </svg>

     <p class="mt-3">Enter Customer's Phone Number</p>
   
     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="" v-model="phoneNumber" placeholder="Phone Number">
   
     <button type="button" class="btn bgColor" @click="handleSubmit">Next</button>
    </div>


  </div>
</template>

<style scoped>

.container{
  width:500px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top:100px;
}
@media screen and (max-width:420px) {
  .container{
    width:100%;
  }
}
input{
  width:80%;
  height:50px;
  margin-top:30px;
  margin-left:auto;
  margin-right: auto;
}
.bgColor{
  background-color:#00263d;
  color:white;
  font-weight:bold;
  width:80%;
  margin-left: auto;
  margin-right: auto;
  margin-top:50px;
  height:50px
}
</style>
