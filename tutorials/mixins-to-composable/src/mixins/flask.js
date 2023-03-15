import swal from "sweetalert";



export default{
   methods:{
        flask(head,message,type){
            swal(head,message,type);
        }
   }
}