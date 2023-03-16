import { ref, watch } from "vue";


const useChanges=(key,val=null)=>{
    let storedValue=localStorage.getItem(key);

    const pushLocal=()=>{
        if(val.value=='' || val.value==null){
            localStorage.removeItem(key)
        }
        else{
            
            localStorage.setItem(key,val.value)
        }
    }

    
    if(storedValue){
        val=ref(storedValue);
    }else{
        val=ref(val);
       pushLocal()
    }
    
    
    watch(val,pushLocal);


    /* 
    // it dig deeper into children if any of it change the value it call pushLocal
     watch(val,pushLocal,{deep:true});
    */

 
    return val;
}

export default useChanges;