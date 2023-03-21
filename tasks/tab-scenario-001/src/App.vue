
<template>
  <nav class="d-flex flex-row">
    <button class="btn btn-primary my-3 mx-3 " @click="()=>{
      this.user1=true
    }">
      user1
    </button>
    <button class="btn btn-primary my-3 mx-3" @click="()=>{
      this.user1=false
    }">
      user2
    </button>
    <h4 class="my-3 mx-3">{{ user1 ? 'user1' : 'user2' }}</h4>
  </nav>
<nav class="nav justify-content-between m-auto mt-3" style="width:60%;">
  <button class="btn btn-primary " @click="hadleEvent(1)">Tab 1</button>
  <button class="btn btn-secondary "  @click="hadleEvent(2)">Tab 2</button>
  <button class="btn btn-danger "  @click="hadleEvent(3)">Tab 3</button>
</nav>
  
  <div style="width:60%" class="m-auto mt-5">
    <h1>{{ title }}</h1>
    <h4 >{{ author }}</h4>
    <br/>
    <p>{{content }}</p>

  </div>

  
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      title:'',
      author:'',
      content:'',
      user1:true,
    
    }
  },
  async beforeCreate(){
      const res=await axios.get(`${process.env.VUE_APP_API}/posts/${1}`);
      const result=res.data;
      this.title=result.title,
      this.author=result.author,
      this.content=result.content
  },
  methods:{
    async hadleEvent(id){
      if(!this.user1){
        const res=await axios.get(`${process.env.VUE_APP_API}/timestamps`); 
        const result=res.data;

        if(result.count<=3){

          await axios.put(`${process.env.VUE_APP_API}/timestamps`,{
            time:Date.now(),
            count:result.count+1
          })
        }

        if(result.count>3){
          await axios.post(`${process.env.VUE_APP_API}/timestamps`,{
            time:Date.now() + 3000*60,
            count:result.count
          })
        }

        if(result.time<=Date.now()){
          const res=await axios.get(`${process.env.VUE_APP_API}/posts/${id}`);
          const result=res.data;
          this.title=result.title,
          this.author=result.author,
          this.content=result.content
        }


      
        
      }

      else{

        const res=await axios.get(`${process.env.VUE_APP_API}/posts/${id}`);
        const result=res.data;
        this.title=result.title,
        this.author=result.author,
        this.content=result.content
      }

     
    }
  }
}
</script>

<style>

</style>
