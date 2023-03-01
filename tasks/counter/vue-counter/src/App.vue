<template>
  <div>
    <div>
      <h1>Counter : <span><h1>{{ count }}</h1></span></h1>
    </div>
    <div>
      <button @click="startCounter">start</button> <button @click="stopCounter">stop</button>
    </div>
    <br/>
    <button @click="clearCounter">clear</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      count:0,
      stop:false
    }
  },
  methods:{
    startCounter(){
      this.stop=false;
      let timer=setTimeout(() => {
        if(this.stop==false){
          this.count=this.count+1;
          this.startCounter();
        }
        else if(this.stop==true){
          clearInterval(timer)
        }
      }, 1000);
    },
    stopCounter(){
      this.stop=true;
    },
    clearCounter(){
      this.count=0;
      this.stop=true;
    }
  }
}
</script>

<style>
</style>
