<script setup>
import ComposableFail from './components/ComposableFail.vue';
import ComposableSuccess from './components/ComposableSuccess.vue';
import MixinFail from './components/MixinFail.vue';
import MixinSuccess from './components/MixinSuccess.vue';




</script>

<template>
 <h1>Welcome !</h1>
 <hr/>
 <h1>With using mixins</h1>
<MixinFail/>
<br/>
<MixinSuccess/>

<hr/>

<h1>with using composables</h1>
<ComposableFail/>
<br/>
<ComposableSuccess/>
</template>

<style scoped>

</style>
