import swal from "sweetalert";

export default function useFlask(){
    function flask(x,y,z){
        return swal(x,y,z);
    }

    return {flask}
}