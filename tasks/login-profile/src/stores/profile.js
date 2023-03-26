import axios from "axios"
import {defineStore} from "pinia"

export const useProfileStore=defineStore('profile',{
    state:()=>({
        token:localStorage.getItem('authToken') || sessionStorage.getItem('authToken') || null,
        loading:true,
        popupcontent:'',
        popupshow:false,
        popupstatus:'error',
        skill:'',
        projectTitle:'',
        projectDescription:'',
        projectWebsite:'',
        projectGithub:'',
        mmpprojectremove:false,
        imageUrl:'',
        data: {
                email:'',
                profession:'',
                mobileno:'',
                skills:[],
                professionaldescription:'',
                image:'',
                name:'',
                whoiam:'',
                projects:[],
                updated:false,
                linkedin:'',
                github:'',
    
    
            },

        

    }),
    actions:{
        setData(data){
            this.token=localStorage.getItem('authToken') || sessionStorage.getItem('authToken')
            this.data=data
            this.loading=false;
        },
        addSkill(){
                if(!this.data.skills){
                    this.data.skills=[]
                }
           
                this.data.skills=[...this.data.skills,this.skill]
                this.skill=''
            
        },
        removeSkill(str){
            this.data.skills.splice(this.data.skills.indexOf(str),1)
        },
        addProject(){

            if(!this.data.projects){
                this.data.projects=[]
            }

            if(!this.projectTitle || !this.projectDescription){
                this.projectWebsite=''
                this.projectGithub=''
                this.projectTitle='';
                this.projectDescription='';
                return
            }
            const obj={};

            obj.title=this.projectTitle;
            obj.description=this.projectDescription;

            if(this.projectWebsite){
                obj.website=this.projectWebsite;
                this.projectWebsite=''
            }
            if(this.projectGithub){
                obj.github=this.projectGithub;
                this.projectGithub=''
            }
            this.data.projects=[...this.data.projects,obj]
            this.projectTitle='';
            this.projectDescription='';
        },
        removeProject(pr){
            this.data.projects.splice(this.data.projects.indexOf(pr),1)

        },
        async updateData(){
           const headers = {
                Authorization: `Bearer ${this.token}`
              };
            this.data.updated=true;
            const data=this.data
            this.loading=true
            try{

                await axios.put(`${process.env.VUE_APP_API}/editdata`,data,{headers})
                this.loading=false;
                this.popupstatus='success';
                this.popupcontent='Details Updated Successfully'
                this.popupshow=true
            }catch(err){
                this.loading=false;
                this.popupstatus='error';
                this.popupcontent='Facing network issuse please try after some time'
                this.popupshow=true
            }
        }
    }
})