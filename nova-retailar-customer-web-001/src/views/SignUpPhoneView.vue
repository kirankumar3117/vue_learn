<template >
    <div class="signUpViewContainer">
        <OtpError v-if="otpError || success" :data="errorData" @otp-error-submitted="handleOtpErrorSubmit"/>
        <div class="container" :id="otpError || success ? 'disable' : '' ">
            <ProgressBar :phone="signUpPhone" :otp="otpPhone" :id="userId"/>
            <SignUpPhone @submited-mobile="handlePhoneSubmit" v-if="signUpPhone" :otpInputEmpty="otpInputEmpty"/>
            <SignUpOtp v-if="otpPhone" @otp-submited="handleOtpSubmit" :otpInputEmpty="otpInputEmpty"/>
        </div>
    </div>
</template>
<script>
import OtpError from '../components/OtpError.vue';
import ProgressBar from '../components/ProgressBar.vue';
import SignUpOtp from '../components/SignUpOtp.vue';
import SignUpPhone from '../components/SignUpPhone.vue';

export default {
    components: { SignUpPhone, ProgressBar, SignUpOtp, OtpError },
    props:{
      phone:String,
      str:String,
      otpErrorStatus:Boolean
    },
    methods:{
        handlePhoneSubmit(phone){
           
            
            setTimeout(()=>{
                // this is for if the mobile no is correct
                this.signUpPhone=false;
                this.otpPhone=true;
                console.log(phone)
                console.log("Mobile Number Registered Successfully !")
            },1000)
            
            
             // //checking error start 
            // setTimeout(()=>{
            //     this.otpError=true;
            //     this.errorData.errorPropsMobile=false;
            //     this.errorData.errorPropsOtp=true;
            // },1000)
            // //checking error end

        
        },
        handleOtpSubmit(str){
            console.log(str)
            console.log("OTP verification success full")
            this.userId=true;

            
            // this.success=true
            // //checking error start 
            // setTimeout(()=>{
            //     this.otpError=true;
            //     this.errorData.errorPropsMobile=false;
            //     this.errorData.errorPropsOtp=true;
            // },1000)
            // //checking error end
        },
        handleOtpErrorSubmit(otpErrorStatus){
            console.log("otp error becomes false");
            this.otpError=otpErrorStatus
            this.otpInputEmpty=true;
            setTimeout(()=>{
                this.otpInputEmpty=false;
            },1000)
            
            
        }
    },
    data(){
        return {
            // states for progress bar start
            signUpPhone:true,
            otpPhone:false,
            userId:false,
            // states for progress bar end

            otpError:false,
            otpInputEmpty:false,
            errorData:{

                errorPropsMobile:false,
                errorPropsOtp:false,
                success:false
            }
        }
    }

}
</script>
<style>
    .container{
        width:100vw;
        background-color: #eff6fe !important;
       
    }
    @media screen and (max-width:420px) {
        .container{
            width:100%;
        }
    }
    *{
        background-color: #eff6fe;

    }
    #disable{
    pointer-events: none;
    opacity: 0.4;
    }
</style>