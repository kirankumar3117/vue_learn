<template>
    <section v-if="destination" class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>

        </div>

    </section>
    <section class="experiences">

        <h2>Top Experiences in {{ destination.slug }}</h2>

        <div class="cards">
            
            <ExperienceCard 
            v-for="experience in destination.experiences"
            :key="experience.slug"
    
            :experience="experience"
            />
        </div>
    </section>
   
</template>


<script>

import sourceData from "@/data.json";

import ExperienceCard from "@/components/Experience.vue"
export default{
    props:{
        id:{type:String,required:true}
    },
    components:{
        ExperienceCard
    },
   data(){
    return {
        destination:null
    }
   },

    computed:{
     
        destination(){
            return sourceData.destinations.find(e=> e.id===parseInt(this.id))
        }


    },
    // async created(){
    //     const res=await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`);

    //     const data=await res.json()

    //     this.destination=data

    //     this.$watch(
    //         ()=> this.$route.params,
    //         async()=>{
    //         const res=await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`);

    //         const data=await res.json()

    //         this.destination=data
    //         }
    //     )

        
    // }
}

</script>