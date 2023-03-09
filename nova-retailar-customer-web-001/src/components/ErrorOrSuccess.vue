<template >
    <div >
        <div class="otpContainer">

            <!-- svg for error -->
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="red" class="bi bg-transparent mt-4 fw-bolder bi-exclamation-circle" viewBox="0 0 16 16" v-if="data.success==false">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
            </svg>

            <!-- svg for success -->
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="green" class="bi bg-transparent mt-4 fw-bolder bi-exclamation-circle mt-3" viewBox="0 0 16 16" v-if="data.success">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>

            <!-- heading to show about the popup -->
            <h3 class="bg-transparent mt-4">{{ data.errorPropsMobile ? 'Mobile No Error' : data.errorPropsOtp ? 'OTP Error' : data.success ? 'Success' : 'Wrong' }} </h3>

            <!-- mobile No and OTP error -->
            <p class="bg-transparent mt-3" v-if="!data.success && !data.documentUpload ">  You have entered an invalid {{ data.errorPropsMobile ? 'Number' : 'OTP' }} <br/>Please enter a valid {{ data.errorPropsMobile ? 'Mobile Number' : 'OTP' }}</p>

            <!-- document error -->
            <p class="bg-transparent mt-3" v-if="data.documentUpload">  An invalid document <br/>Please upload a valid document of type image</p>


            <!-- OTP success -->
            <p class="bg-transparent mt-3 successText" v-if="data.success">Upload a valid Nation Id to complete the registration</p>

            <button type="button" class="btn button" @click="handleOtpErrorSubmit" v-if="!data.success">Ok</button>
            <button type="button" class="btn button" @click="handleSuccessSubmit" v-if="data.success">Continue</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'ErrorOrSuccess',
    methods:{
        handleOtpErrorSubmit(){
            this.$emit('otp-error-submitted',false)
        },
        handleSuccessSubmit(){
            this.$emit('otp-error-submitted',true)
        }
    },
  
    props:{
        data:Object
    },
   
}
</script>
<style >

.otpContainer{
    width:270px;
    height:300px;
    /* border:1px solid red; */
    position:absolute;
    z-index: 2;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius:7px;
    margin-left:40%;
    margin-top:10%;
    text-align:center;
    
}
@media screen and (max-width:720px) {
    .otpContainer{
        margin-left:32%;
        margin-top:16%;
    }
}
@media screen and (max-width:420px) {
    .otpContainer{
        margin-left:17%;
        margin-top:45%;
    }
}
.otpContainer {
	-webkit-animation: otpContainer 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: otpContainer 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes otpContainer {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}
@keyframes otpContainer {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}
.button{
    background-color: #00263d;
    color:white;
}
.successText{
    width:80%;
    margin-left:auto;
    margin-right:auto;
}
</style>