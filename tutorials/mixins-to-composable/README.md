# mixins-to-composable

## ***Using Composables***

* Create a root directory for composable in src
* a js file to contain the methods and content

* src
    * composables
        * useFlask.js

```js
import swal from "sweetalert";

export default function useFlask(){
    function flask(x,y,z){
        return swal(x,y,z);
    }
    // so when we use we can destructure the methods
    return {flask}
}
```

* src
    * components
         * ComposableSuccess.vue

```html
<template>
    <div>
        <button @click="flask('Success','Attempted Success','success')">Success Click </button>
    </div>
</template>

```

```js
<script setup>

import useFlask from '../composables/useFlask';
const {flask} =useFlask();
</script>
<style>
    
</style>
```
