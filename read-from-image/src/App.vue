<template>
  <h1>Upload Image</h1>
  <input type="file" @change="handleChange"/>
  <img :src="imageUrl" alt="Upload Image"   accept="image/*" class="image"/>
</template>

<script>
// import Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';
export default {
  name: 'App',
  components: {
  },
  methods:{
   async handleChange(e){
      this.id = e.srcElement.id;
      this.imageUrl = URL.createObjectURL(e.target.files[0]);
      
    //using normal method

      // Tesseract.recognize(
      //  this.imageUrl,
      //   'eng',
      //   { logger: m => console.log(m) }
      // ).then(({ data: { text } }) => {
      //   console.log(text);
      // })

        //using async method

        // both methods working fine

      const worker = createWorker({
        logger: m => console.log(m)
      });
      
      (async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(this.imageUrl);
        console.log(text);
        await worker.terminate();
      })();


    }
  },
  data(){
    return {
      id:'',
      imageUrl:'',
    }
  }
}
</script>

<style>
.image{
  width:300px;
}
</style>
