
<template>
  
<PopUpComponent v-if="profileStore.popupshow"/>

<router-view/>
</template>

<style>
*{
  font-family: sans-serif;
}

</style>

<script >
import PopUpComponent from './components/PopUpComponent.vue';
import { useProfileStore } from './stores/profile';
export default{
    components: {
      PopUpComponent
    } ,
    setup(){
      const profileStore=useProfileStore();
      return{
        profileStore
      }
    }
}

</script>