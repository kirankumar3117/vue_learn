# Life cycle hooks 

- beforeCreate()
- created()
- beforeMount()
- mounted()
- beforeUpdate()
- updated()
- beforeUnmount()
- unmounted()

other route hooks those who work same as beforeUnmount,unmounted.
  * - beforeRouteEnter()
  * - beforeRouteLeave()
 - this components contains 3 arguments
 ```
 beforeRouteEnter(to, from, next){
    // next has to called, and we can also use conditions before route enter and leaves
    next()
 }
    
 ```














