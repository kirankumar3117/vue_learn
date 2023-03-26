import {defineStore} from "pinia"

export const useProfileStore=defineStore('profile',{
    state:()=>({
        token:localStorage.getItem('authToken') || sessionStorage.getItem('authToken') || null,
        email:'',
        loading:true,
        profession:'',
        salarysearch:false,
        mobile:'',
        skills:[],
        professionaldescription:'',
        image:'',
        name:'',
        whoiam:"",
        projects:[],
        contact:{},
        popupcontent:'Please Login',
        popupshow:false,
        popupstatus:'error',
        updated:false,
        skill:'',
        projectTitle:'',
        projectDescription:'',
        projectWebsite:'',
        projectGithub:''

    }),
    actions:{
        setData(data){
            this.token=localStorage.getItem('authToken') || sessionStorage.getItem('authToken')
           if(data.update==false){
            this.email=data.email
           }

           this.loading=false
           
        },
        addSkill(){
            if(this.skills.includes(this.skill)){
                this.skill=''
            }
            else{
                this.skills.push(this.skill);
                this.skill=''
            }
        },
        removeSkill(str){
            this.skills.splice(this.skills.indexOf(str),1)
        },
        addProject(){
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
            this.projects.push(obj),
            this.projectTitle='';
            this.projectDescription='';
        },
        removeProject(str){

        }
    }
})