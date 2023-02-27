<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <input type="text" name="phoneNo" v-model="number" />
  <br/>
  <button @click="loginMobile">Login</button>
</template>

<script>
import {RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth"
import {auth} from "@/firebase"
export default {
  name: 'App',
  data(){
    return{
      number:'',

    }
  },
  methods:{
    getCaptcha(){
      
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log(response)
          // ...
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          console.log("expired")
          // ...
        }
      }, auth);
    },
    loginMobile(){
      // console.log(this.number)
      this.getCaptcha();
      const phoneNumber = `+91${this.number}`
      const appVerifier = window.recaptchaVerifier;
       signInWithPhoneNumber(auth, phoneNumber,appVerifier)()
       .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log("yes")
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log(error)
    });

    }
  },
  components: {
  }
}
</script>

<style>

</style>
