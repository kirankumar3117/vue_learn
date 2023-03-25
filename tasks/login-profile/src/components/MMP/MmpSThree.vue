<template>
    <div class="session1">
        <div class="left">
            <label for="">Name* : <span class="noskills">You can add upto 10 skills</span></label>
           
            <input type="text" class="form-control">
            <br/>
            <button class="btn btn-primary">add</button>
            
            <div class="skills">
                
            </div>
        </div>
        <div class="right">

        </div>
    </div>

    <div class="line"></div>
</template>

<style scoped>
.session1{
    display: flex;
    width:100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top:50px;
}

.left{
    width:350px;
    padding: 50px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 3rem;
}
.right{
    width:650px;
    border: 1px solid black;
    height:400px;
}
.skills{
    border:1px solid red;
    margin-top:10px;
    height:250px;
}
.noskills{
    font-size: small;
    margin-left:10px;
    color:rgb(99, 97, 97);
}
.line{
    width:60%;
    height:2px;
    background-color: rgb(194, 193, 193);
    margin-left: 15%;
    margin-top:80px;
}
</style>