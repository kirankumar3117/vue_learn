import {defineStore} from "pinia"

export const useProfileStore=defineStore('profile',{
    state:()=>({
        token:localStorage.getItem('authToken') || sessionStorage.getItem('authToken') || null,
        email:'kirankumar@gmail.com',
        loading:true,
        relaventJobs:[],
        jobsearch:false,
        profession:'Web Developer',
        salarysearch:false,
        salary:'',
        adhar:'',
        pan:'',
        mobile:'',
        nativeaddress:'',
        addresssame:false,
        currentaddress:'',
        skills:['nodejs','reactjs','vujs','mongodb','express'],
        professionaldescription:'Dedicated and detail-oriented aspiring full-stack developer with specialization in MERN stack Development. Self-motivated and curious, with a keen interest in building user-friendly products. Looking forward to honing my skills in a challenging work environment.',
        image:'https://kirankumarportfolio.vercel.app/static/media/..e767f524fdf41af336bc.png',
        name:'Kiran Kumar',
        whoiam:"edicated and detail-oriented aspiring full-stack developer with specialization in MERN stack Development. Self-motivated and curious, with a keen interest in building user-friendly pedicated and detail-oriented aspiring full-stack developer with specialization in MERN stack Development. Self-motivated and curious, with a keen interest in building user-friendly p",
        projects:[
            {
                title:'Netflix',
                description:'dicated and detail-oriented aspiring full-stack developer with specialization in MERN stack Development. Self-motivated and curious, with a keen interest in building user-friendly pedicated',
                website:'',
                github:''
            },
            {
                title:'Netflix',
                description:'dicated and detail-oriented aspiring full-stack developer with specialization in MERN stack Development. Self-motivated and curious, with a keen interest in building user-friendly pedicated',
                website:'',
                github:''
            }
        ],
        contact:{
            email:'email',
            mobileno:'7396192829',
            linkedin:'lik',
            github:'git'
        }

    }),
    actions:{
        setData(data){
            console.log("store profile")
           if(data.update==false){
            this.email=data.email
           }

           this.loading=false
           
        },
        handlePortfolio(){
            console.log("this.token")
        }
    }
})