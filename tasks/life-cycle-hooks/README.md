# Life cycle hooks 

- beforeCreate()
- created()
- beforeMount()
- mounted()
- beforeUpdate()
- updated()
- beforeUnmount()
- unmounted()

other route hooks those who work same as beforemount,unmounted.
  * - beforeRouteEnter()
  * - beforeRouteLeave()
 - this components contains 3 arguments
 ```
 beforeRouteEnter(to, from, next){
    // next has to called, and we can also use conditions before route enter and leaves
    next()
 }
    
 ```

 # slot 


- slot are used to pass templete content between components

for suppose 

* A child component have slot and we have to pass some template or html content to it 
* so we can define slot and give a naming convertion for convinience cause if we have more slots than one we do face some issuse 

***SlotCheck.vue***

```
 
    <slot name="image">
       
    </slot>

    <slot name="portfolio" :linkName="linkName">
        
    </slot>
```
*  we can also pass data from child to parrent using **v-bind** or **:**

- Parent compnent

* parent component containing some html template implementation which directly passing to the chile component

***HomeView.vue***

```
    <SlotCheck>
  
  <template #portfolio="{linkName}">
    Portfolio : <a href="https://kirankumarportfolio.vercel.app">{{ linkName }}</a>
  </template>

  <template #image>
    <img src="https://s3-us-west-2.amazonaws.com/kredily-companies-media/kredily1-ffd9cf6a-2486-4b30-9bfe-809ea07872cb/employee_logo_f3bbd748c9284701a938f0835bd5b8b5747366.png" alt="" style="width
    :150px"/>
  </template> 

  </SlotCheck>
```

- which slot it has to be added, we done this with

   * **Example**

- **#portfolio** or **v-slot:portfolio**
- to access the props **#portfolio={linkName}**



# Mixins

- When we have reusable data properties and methods for different components we can use mixins 

* for suppose

- A clint ask for onclick count functionality, then we implemented it.
- again he asks for another on hover functionality, then we copy the same code from click functionality after the changes we done it .
- again he ask for how many time card was clicked and he need to know.

* so, in this all components we have **count** propery and **count method** are same 

- By using mixins we can reuse them and use them in all the components without worrying 

for that 
- we need create a mixins folder 
- and add js methods

### ex:

* mixins
   * Counter.js
     
```
export default{
    data(){
        return {
            count:0
        }
    },
   methods:{
    incrementCounter(){
        this.count += 1
    }
   }
}
```

- Then in 
* CounterButton.vue
```
     <button @click="incrementCounter">count is {{ count }}</button>

     // we can directly use this just by defining mixins 
     //example

    import CounterIncrement from "@/mixins/Counter.js"
    export default{
        name:'CounterButton',
        mixins:[CounterIncrement]
    }
```
 - And same goes to 
 * HoverCount.vue

 ```
     <h2 @mouseover="incrementCounter">Hover is {{ count }}</h2>

 ```















