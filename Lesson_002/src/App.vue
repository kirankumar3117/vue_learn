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
      async addTask(task){
        const res=await fetch("http://localhost:5000/tasks",{
          method:'POST',
          headers:{
            'Content-type':'application/json',
          },
          body:JSON.stringify(task)
        })
        const data=await res.json();
        this.tasks=[...this.tasks,data]
      },
      async DeleteTask(id){
        if(confirm("Are You Sure?")){
          const res=await fetch(`http://localhost:5000/tasks/${id}`,{
            method:"DELETE"
          })

         res.status==200 ? this.tasks=this.tasks.filter((task) => task.id!== id) : alert("Error in deleting")
        }
      },

      async toggleReminder(id){
        const toggleTask=await this.fetchTask(id);
        const updtoggleTask={...toggleTask,reminder:!toggleTask.reminder};

        const res= await fetch(`http://localhost:5000/tasks/${id}`,{
          method:"PUT",
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(updtoggleTask)
        });

        const data=await res.json();
       this.tasks.map((e)=>{
        return e.id==id ? e.reminder=data.reminder : e
       })
      },
      toggleAddTask(){
        this.showAddTask=!this.showAddTask
      },
      //fetching the data from backend
      async fetchData(){
        const res=await fetch("http://localhost:5000/tasks");
        const data=await res.json();
        // console.log(data)
        return data
      },
      async fetchTask(id){
        const res=await fetch(`http://localhost:5000/tasks/${id}`);
        const data=await res.json();
        // console.log(data)
        return data
      }
   
  },
  async created(){
    this.tasks=await this.fetchData();
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
