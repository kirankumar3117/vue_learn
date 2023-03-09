
<script>
  export default{
    name:'SignUpOtp',
    components:{
    },
    props:{
        otpInputEmpty:Boolean
    },
    data(){
      return {
        otpNo1:'',
        otpNo2:'',
        otpNo3:'',
        otpNo4:'',
        otpNo5:'',
        otpNo6:'',
      
      }
    },
    updated(){

        let one=document.querySelector("#one")
        let two=document.querySelector("#two")
        let three=document.querySelector("#three")
        let four=document.querySelector("#four")
        let five=document.querySelector("#five")
        let six=document.querySelector("#six")

        if(this.otpNo1==''){
            one.focus()
        }
       else if(this.otpNo2==''){
         two.focus()
       }else if(this.otpNo3==''){
        three.focus()
       }else if(this.otpNo4==''){
        four.focus()
       }else if(this.otpNo5==''){
        five.focus()
       }else if(this.otpNo6==''){
        six.focus()
       }

       if(this.otpInputEmpty==true){
        this.otpNo1=''
        this.otpNo2=''
        this.otpNo3=''
        this.otpNo4=''
        this.otpNo5=''
        this.otpNo6=''
       }
    },
    mounted(){
        document.querySelector('#one').focus()
    },
    methods:{
      handleSubmit(e){
       e.preventDefault();
       console.log(e.target)
        let str=this.otpNo1+this.otpNo2+this.otpNo3+this.otpNo4+this.otpNo5+this.otpNo6;
         this.$emit('otp-submited',str)
        
        
      }
    }
  }
</script>

<template>
  <div>

    <div class="container">
   
    <!-- <otpError/> -->
   <div class="thread">

       <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-phone-vibrate mt-5 " viewBox="0 0 16 16">
         <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z"/>
         <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z"/>
       </svg>
   </div>

     <p class="mt-5">Enter OTP Sent To Your Phone Number</p>
   
     <!-- <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby=""  placeholder="Phone Number"> -->
   <div>

       <form @submit="handleSubmit">
        <div class="otpForm ">

            <input type="text"  class="form-control" maxlength="1" name="1" id="one" v-model="otpNo1"/>
            <input type="text" class="form-control"  maxlength="1" name="2" id="two" v-model="otpNo2"/>
            <input type="text" class="form-control" maxlength="1" name="3" id="three" v-model="otpNo3"/>
            <input type="text" class="form-control" maxlength="1" name="4" id="four" v-model="otpNo4"/>
            <input type="text" class="form-control" maxlength="1" name="5" id="five" v-model="otpNo5"/>
            <input type="text" class="form-control" maxlength="1" name="6" id="six" v-model="otpNo6"/>
        </div>
          <button type="button" class="btn bgColor" @click="handleSubmit">Next</button>
       </form>
     
   </div>
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
input{
    width:40px;
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
.thread{
   
  position: relative;
  top:-20px;
  transform-origin:bottom;
  animation: moveIt 0.2s ease-in-out infinite;
  width:125px;
  height:125px;
  margin-left:auto;
  margin-right:auto;
}
@keyframes moveIt {
  0%, 100% {
    transform: rotate(20deg);
}
  50% {
    transform: rotate(-20deg);
  }
  
}
.otpForm{
    width:60%;
    display:flex;
    flex-direction: row;
    /* gap:-2px; */
    margin-left:auto;
    margin-right:auto;
}
@media screen and (max-width:420px) {
    .container{
        width:100%;
    }
    .otpForm{
        margin-left:14%;
    }
}
 
</style>
