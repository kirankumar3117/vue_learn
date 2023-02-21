<template>


<form @submit="onSubmit">
    <label>Task</label>
    <input type="text" name="text" v-model="text" placeholder="Add tasks here"/>
    <label>Date & Time</label>
    <input type="text" name="day" v-model="day" placeholder="Add Date and Time here"/>
    <div class="reminder">
        <label for="">Set Reminder</label>
        <input type="checkbox" name="reminder" v-model="reminder" id="">
    </div>
    <button class="tasks">save tasks</button>
</form>

</template>


<script>
export default{
    name:'AddTask',

    data(){
        return {
            text:'',
            day:'',
            reminder:false
        }
    },
    methods:{
        onSubmit(e){
            e.preventDefault();
            if(!this.text){
                alert("Please Add Some Task");
                return
            }

            const newTask={
                // id:Math.floor(Math.random()*10000000),
                text:this.text,
                day:this.day,
                reminder:this.reminder,
            }

            this.$emit('add-task',newTask)
            this.text=''
            this.day=''
            this.reminder=false
        }
    }
}

</script>  

<style scoped>
.reminder{
    display:flex;
    margin:20px;
}
.tasks{
    background-color: black;
    color:white;
    height:30px;
    border-radius: 7rem;
}

input{
    height:30px;
}

</style>