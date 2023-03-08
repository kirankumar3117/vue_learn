<template >

    <div class="container">
        <div>
            <div  class="progressLine">
                
            </div>
            <div class="radio">
                <div :id="phone ? 'bgChange' : '' " >
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="green" class="bi bi-check-circle successMark mb-2" viewBox="0 0 16 16" v-if="otp">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>
                </div>
                <div :id="otp ? 'bgChange' : '' ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="green" class="bi bi-check-circle successMark mb-2" viewBox="0 0 16 16" v-if="id">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>
                </div> 
                <div :id="id ? 'bgChange' : '' ">

                </div>
                <!-- <input type="radio"/>
                <input type="radio"/>
                <input type="radio"/> -->
            </div>
        </div>
    </div>


</template>
<script>
export default {
    name:'ProgressBar',
    props:{
        phone:Boolean,
        otp:Boolean,
        id:Boolean
    }
}
</script>
<style scoped>
.container{
    width:100%;
    text-align:center;
    position: relative;
    z-index:1;
    right:10px;
    top:100px;
    left:1px;
}
.progressLine{
    width:170px;
    height:2px;
    background-color: black !important;
    margin-left:auto;
    margin-right:auto;
    position: relative;
    top:20px;
    color:black;
    z-index: 1;

}
.radio>div{
    width:35px;
    height:35px;
    border:1px solid black;
    border-radius: 50%;
    background: transparent;
    background-color: white;
    position:relative;
    z-index:2;

}
.radio{
    width:250px;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left:auto;
    margin-right:auto;
    top:-19px;
}
#bgChange{
    background-color:#00263d;
    color:white;
}
.successMark{
   
   margin-top:-2.5px;
   margin-left:-2.6px;
}
</style>