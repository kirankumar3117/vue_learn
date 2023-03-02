<script >
import SlotCheck from "@/components/SlotCheck.vue";
export default{
  components:{
    SlotCheck
  },
  
}
</script>

<template>
  <main>
    <h1>This is Home</h1>
  </main>
  <SlotCheck>
  
  
  <template #portfolio="{linkName}">
    Portfolio : <a href="https://kirankumarportfolio.vercel.app">{{ linkName }}</a>
  </template>

  
  <template #image>
    <img src="https://s3-us-west-2.amazonaws.com/kredily-companies-media/kredily1-ffd9cf6a-2486-4b30-9bfe-809ea07872cb/employee_logo_f3bbd748c9284701a938f0835bd5b8b5747366.png" alt="" style="width
    :150px"/>
  </template>
  
  </SlotCheck>
</template>
