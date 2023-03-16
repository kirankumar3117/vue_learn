<script setup>

defineProps({
    modelValue:String
})

let emit=defineEmits(['update:modelValue'])

const onTabPress=(e)=>{
 
  // the target is textarea
    let textTag=e.target;
   
      let textValue=textTag.value,
          textStart=textTag.selectionStart,
          textEnd=textTag.selectionEnd;

        textTag.value=textValue.substring(0,textStart) + "\t" + textValue.substring(textEnd);

        textTag.selectionStart=textTag.selectionEnd=textStart+1;

}



</script>

<template>
  

  <form>
    <p>Tabable text area</p>
    <textarea  @keydown.tab.prevent="onTabPress" style="width:300px;height:250px" v-text="modelValue" @keyup="emit('update:modelValue',$event.target.value)"></textarea>
  </form>
</template>

<style scoped>

</style>
