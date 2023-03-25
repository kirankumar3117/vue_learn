<template>
    <div>
            <form action="" id="form">
                <label for="">Email :</label>
                <input type="text" class="form-control" :value="profileStore.email" disabled>
                <label for="" >Adhar No :</label>
                <input type="text" class="form-control" v-model="profileStore.adhar">
                <label for="">PAN No : </label>
                <input type="text" class="form-control">
                <label for="">Mobile No :</label>
                <input type="text" class="form-control">
                <label for="">Native Address : </label>
                <input type="text" class="form-control">
                <div>
                    <label for="" class="form-check-label">Use it for current address  </label>
                    <input type="checkbox" name="" id="" class="form-check-input mx-2 my-1 mt-3">
                </div>
                <div>
                    <label for="">Current address : </label>
                    <input type="text" class="form-control">
                </div>
                <label for="">Skills : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag" viewBox="0 0 16 16">
                    <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/>
                    <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"/>
                </svg></label>
                <div class="tasks">
                    <div class="taskelement">
                        <span class=" btn btn-primary">reactjs</span> 
                        <span class="removeskill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg></span>
                    </div>
                    
                    
                </div>
                <input type="text" class="form-control">
                <div>
                    <label for="">Current/Looking Position : </label>
                    <input type="text" list="cars" class="form-control"  :defaultValue="profileStore.position" v-model="jobsearch">
                    <div class="jobrolesshow" v-show="profileStore.jobsearch">
                        
                       <JobSearch @handle-job-roll="handleJobRoll"/>
                    </div>
                </div>
                <div>
                    <label for="">Current Salary</label>
                    <input type="text" class="form-control" @click="profileStore.salarysearch=true" :value="profileStore.salary">
                    <div class="jobrolesshow" v-show="profileStore.salarysearch">
                        
                        <SalaryPic/>
                     </div>
                </div>
                <div>
                    <label for="">Description about position</label>
                    <textarea name="" id="" cols="3" rows="3" class="form-control"></textarea>
                </div>
            </form>
            <br/>
            <button class="btn btn-primary">Update</button>
        </div>
</template>
<script>
import "../../../public/profile.css"
import JobSearch from "./JobSearch.vue"
import { useProfileStore } from "@/stores/profile"
import allpositions from "../../assets/jobroles.json"
import SalaryPic from "./SalaryPic.vue"
export default{
    name:'EditContent',
    components:{
    JobSearch,
    SalaryPic
},
    data(){
        return {
            jobsearch:'',
            joblistshow:false
        }
    },
    setup(){
        const profileStore=useProfileStore();
        return {
            profileStore
        }
    },
   watch:{
        jobsearch:function(){
            const job=this.jobsearch;
            
            const res=allpositions.joblist.filter((e)=>{

                 return e.toLowerCase().includes(job)
            })
            if(this.jobsearch==''){

                this.profileStore.relaventJobs=[];
            }
            else{
                this.profileStore.relaventJobs=res;
                this.profileStore.jobsearch=true;
                
            }
        }
   },
   methods:{
    handleJobRoll(roll){
        this.profileStore.relaventJobs=[]
        this.jobsearch=roll
        this.profileStore.position=roll
        this.profileStore.jobsearch=false

    }
   },
}
</script>