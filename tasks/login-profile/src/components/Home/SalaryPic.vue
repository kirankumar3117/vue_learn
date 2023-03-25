<template>
    <p class="form-control" v-for="salary in salaries" @click="handleJObRoll(salary)">{{ salary}}</p>
</template>

<script >
import { useProfileStore } from '@/stores/profile';
import job from "../../assets/jobroles.json"
export default{
    setup(){
        const profileStore=useProfileStore()
        return {
            profileStore
        }
    },
    data(){
        return{
            salaries:job.salary
        }
    },
    methods:{

        handleJObRoll(salary){
            this.profileStore.salary=salary,
            this.profileStore.salarysearch=false
        }
    }
}

</script>

