import axios from "axios";

export default{
    async handleMyPortfolio(){
        const headers = {
            Authorization: `Bearer ${this.profileStore.token}`
        };
        const id=await axios.get(`${process.env.VUE_APP_API}/getuserid`,{headers});
       
        router.push({path:`/MMP/${id.data}`})
    }
}