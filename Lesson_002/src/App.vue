  <template>
    <div class="container">
      <Header :showAddTask="showAddTask" @toggle-add-task="toggleAddTask" title="Task Tracker" />
      <div v-show="showAddTask" >

        <AddTask @add-task="addTask"/>
      </div>
      <Tasks @toggle-reminder="toggleReminder" @delete-task="DeleteTask" :tasks="tasks"/>
    </div>
</template>
<script >
 import Header from "./components/Header.vue"
import Tasks from "./components/Tasks.vue"
import AddTask from "./components/AddTask.vue"
 export default{
  name:'App',
  components:{
    Header,
    Tasks,
    AddTask,
  },
  data(){
    return {
      tasks:[],
      showAddTask:false
    }
  },
  methods:{
      addTask(task){
        this.tasks=[...this.tasks,task]
      },
      DeleteTask(id){
        if(confirm("Are You Sure?")){

          this.tasks=this.tasks.filter((task) => task.id!== id)
        }
      },

      toggleReminder(id){
        
       this.tasks.map((e)=>{
        return e.id==id ? e.reminder=!e.reminder : e
       })
      },
      toggleAddTask(){
        this.showAddTask=!this.showAddTask
      }

   
  },
  created(){
    this.tasks=[
      {
        id:1,
        text:"meeting at hospital",
        day:"Feb 21 at 04:00pm",
        reminder:true
      },
      {
        id:2,
        text:"meeting at zoom",
        day:"Feb 21 at 01:00pm",
        reminder:true
      },
      {
        id:3,
        text:"meeting at hotel",
        day:"Feb 21 at 06:00pm",
        reminder:false
      },
    ]
  }
 }
</script>


<style >
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width:100%;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  width: 500px;

  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  margin-left:auto;
  margin-right:auto;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
