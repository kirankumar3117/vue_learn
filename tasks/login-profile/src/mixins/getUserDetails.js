import axios from "axios";


export default{
    methods:{
        async getUserData(){
            this.profileStore.loading=true;
            let token = localStorage.getItem("authToken") || sessionStorage.getItem('authToken');
          const headers = {
            Authorization: `Bearer ${token}`
          };
          try{
            const userData=await axios.get(`${process.env.VUE_APP_API}/userdata`, { headers });
            this.profileStore.setData(userData.data)
            this.profileStore.loading=false;
          }catch(err){
            console.log(err)
            this.profileStore.loading=false;
          }
          }
        },
}