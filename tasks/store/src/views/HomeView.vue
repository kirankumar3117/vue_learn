<template>
  <div class="home">
    {{ count }}
    <h1>This is home page.</h1>
  </div>
</template>

<script >
// @ is an alias to /src
import {useCounterStore} from "@/stores/counter";

export default {
  name: "HomeView",
  setup(){
    
  },
  data(){
    return{
      count:()=>{
        const {count}=useCounterStore();
        return count
      }
    }
  },
 
};
</script>
