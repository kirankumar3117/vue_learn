<template>
  <div class="signUpViewContainer">
    <!-- error or success reusable component -->
    <ErrorOrSuccess
      v-if="error || success || documentError"
      :data="successOrErrorData"
      @otp-error-submitted="handleSuccessOrError"
    />

    <div class="container" :id="error || success || documentError ? 'disable' : ''">

        <!-- Prograss bar and suitable conditions -->
      <ProgressBar
        :phone="signUpPhone"
        :otp="otpPhone"
        :id="userId"
        :complete="documentUploadSuccess"
      />

      <!-- signup page component with submit function  taking data from props-->
      <SignUpPhone
        @submited-mobile="handlePhoneSubmit"
        v-if="signUpPhone"
        :otpInputEmpty="otpInputEmpty"
      />

      <!-- Signup with otp component  -->
      <SignUpOtp
        v-if="otpPhone"
        @otp-submited="handleOtpSubmit"
        :otpInputEmpty="otpInputEmpty"
      />
      <SignUpDocument
        v-if="userId"
        @user-document-details="handleDocumentDetails"
        @user-details="handleUser"
        :documentUploadSuccess="documentUploadSuccess"
        :documentData="documentData"
      />
    </div>
  </div>
</template>
<script>
import ErrorOrSuccess from "../components/ErrorOrSuccess.vue";
import ProgressBar from "../components/ProgressBar.vue";
import SignUpOtp from "../components/SignUpOtp.vue";
import SignUpPhone from "../components/SignUpPhone.vue";
import DocumentUploadPage from "../components/DocumentUploadPage.vue";
import SignUpDocument from "../components/SignUpDocument.vue";

export default {
  components: {
    SignUpPhone,
    ProgressBar,
    SignUpOtp,
    ErrorOrSuccess,
    DocumentUploadPage,
    SignUpDocument,
  },
  props: {
    phone: String,
    str: String,
    otpErrorStatus: Boolean,
  },
  methods: {
    handlePhoneSubmit(phone) {
      if (phone == "123456") {
        this.userData.mobileNo = phone,
          // this is for if the mobile no is correct
        this.signUpPhone = false; //for progress bar & for component visibility
        this.otpPhone = true; //progress bar & component
        console.log(phone);
        console.log("Mobile Number Registered Successfully !");
      } else {
        //checking error start
        setTimeout(() => {
          this.error = true;
          this.successOrErrorData.errorPropsMobile = true;
        }, 1000);
        //checking error end
      }
    },
    handleOtpSubmit(str) {
      if (str == "123456") {
        this.userData.otp = str;
        console.log(str);
        console.log("OTP verification success full");
       
        this.success = true; // for success popup show
        this.successOrErrorData.success = true;
      } else {
        //checking error start
        setTimeout(() => {
          this.error = true;
          this.successOrErrorData.errorPropsOtp = true;
        }, 1000);
        //checking error end
      }
    },



    handleSuccessOrError(state) {
      if (state == true) {
        console.log("succcess fully verified OTP");
        this.otpPhone = false; //otp succesfull remove otp component and show document component
        this.userId = true; //(progressbar) he can move to upload documents after success
        this.success = false;
    }
    this.successOrErrorData.success = false;
    this.successOrErrorData.errorPropsMobile = false;
    this.successOrErrorData.errorPropsOtp = false;
    this.successOrErrorData.documentUpload = false;
      console.log("popup closed");
      this.error = false;
      this.otpInputEmpty = true; // for emptying the input boxes of mobile and otp when popup closed
      this.documentError = false;
      setTimeout(() => {
        this.otpInputEmpty = false;
      }, 1000);
    },


    handleDocumentDetails(obj) {
      if (obj == true) {
        this.documentError = true;
        this.successOrErrorData.documentUpload = true;
      } else {
        this.documentUploadSuccess = true;
        this.documentData = obj;
      }
    },
    handleUser(obj) {
      this.userData.Id = obj;
      console.log("completed");
      console.log(this.userData);
    },
  },

  data() {
    return {
      signUpPhone: true, //progress bar and visibility pf signUp phone component
      otpPhone: false, // progress and otp
      userId: false, //progressbar and documentupload
     
      error: false, // error popup
      success: false, //success popup
      documentError: false, //error popup

      otpInputEmpty: false, // imput box empty condition

// to control pop up component 
      successOrErrorData: {
        errorPropsMobile: false,
        errorPropsOtp: false,
        success: false,
        documentUpload: false,
      },


      documentUploadSuccess: false, //also used for progressbar
      documentData: new Object(),
      userData: new Object(),
    };
  },
  beforeRouteLeave (to, from, next) {
  
    if(!this.userData.Id){
        alert("Changes may not be saved !")
    }
    next()
  }
};
</script>
<style>
.container {
  width: 100vw;
  background-color: #eff6fe !important;
}
@media screen and (max-width: 420px) {
  .container {
    width: 100%;
  }
}
* {
  background-color: #eff6fe;
}
#disable {
  pointer-events: none;
  opacity: 0.4;
}
</style>
