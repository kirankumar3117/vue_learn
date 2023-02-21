<template>
    <div @click="toggleReminder(task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>{{ task.text }}
            
            <span   v-on:click="onDelete(task.id)" class="fas">remove</span>
        </h3>
        <i class="bi bi-toggles"></i>
        <h4>{{ task.day }}</h4>
    </div>
</template>
 
<script>


    export default{
        name:'Task',
        props:{
            task:Object
        },
        data(){
            return {
                toggleClicks:0
            }
        },
        methods:{
            onDelete(id){
              this.$emit('delete-task',id)
            },
            toggleReminder(id){
                this.toggleClicks=this.toggleClicks+1
                if(this.toggleClicks===1){
                    setTimeout(()=>{
                        console.log("d",this.toggleClicks)
                        switch(this.toggleClicks){
                            case 1: break;
                           case 2:{
                                
                                    this.$emit('toggle-reminder',id)
                            }
                        }
                        this.toggleClicks=0;
                    },300)
                }
            }
        },
        emits:['toggle-reminder','delete-task']
    }
</script>

<style scoped>

.fas{
    width:75px;
    color:white;
    background-color: rgb(219, 77, 77);
    text-align: center;
    border-radius: 7rem;
    height:30px;
}

.task{
    background:#f4f4f4;
    margin:5px;
    padding: 10px 20px;
    cursor:pointer
}
.task.reminder{
    border-left:5px solid green;
}
.task h3{
    /* width:100%; */
    display: flex;
    align-items:center;
    justify-content: space-between;
}
</style>