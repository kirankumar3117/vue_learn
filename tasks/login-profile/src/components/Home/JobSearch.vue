<template>
    <p class="form-control" v-for="roll in profileStore.relaventJobs" @click="handleJObRoll(roll)">{{ roll}}</p>
</template>

<script >
import { useProfileStore } from '@/stores/profile';

export default{
    setup(){
        const profileStore=useProfileStore()
        return {
            profileStore
        }
    },
    methods:{

        handleJObRoll(roll){
           this.$emit('handle-job-roll',roll)
           setTimeout(() => {
            this.$emit('handle-job-roll',roll)

           }, 100);
        }
    }
}

</script>

