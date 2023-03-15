# composition_api

- with out reactivityTransform

```js
<script setup>
import {ref,onMounted} from "vue";

let message=ref('Hello world !');

setTimeout(()=>{
    //we have to add .value
  message.value="hello world with setTimeout !"
},3000)

onMounted(() => {
  alert("component Mounted")
})

</script>
```

- with rectivityTransform

* vite.configue.js
```js
plugins: [vue(
    {
      reactivityTransform : true
    }
  )],
```
- see how can we use ref

```js
<script setup>
import {onMounted} from "vue";

// just have to add $ref
let message=$ref('Hello world !');

setTimeout(()=>{
  // we can directly change value 
  message="hello world with setTimeout !"
},3000)

onMounted(() => {
  alert("component Mounted")
})

</script>
```

