const app= Vue.createApp({
   
    data() {
        return {
            firstName:"Kiran",
            image:"https://randomuser.me/api/portraits/men/10.jpg",
            lastName:"Challagiri",
            email:"kiran@gmail.com",
            gender:"male",
        }
    },
    methods:{
        async getUser(){
            const res=await fetch("https://randomuser.me/api");
            let {results}=await res.json();
            results=results[0];
           this.firstName=`${results.name.first}`
           this.lastName=`${results.name.last}`
           this.email=`${results.email}`
           this.gender=`${results.gender}`
           this.image=`${results.picture.large}`
        }
    }
})

app.mount('#app')