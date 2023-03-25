<template>
    <div class="session2">
        <div class="left">
            <label for="">Project Title : </label>
            <input type="text" class="form-control">
            <label for="">Project Description : </label>
            <textarea name="" id="" cols="30" rows="4" class="form-control"></textarea>
            <label for="">Website Link : <span class="small-text">If any</span></label>
            <input type="text" class="form-control">
            <label for="">Git Hub Link : <span class="small-text">If any</span></label>
            <input type="text" class="form-control">
            <br/>
            <button class="btn btn-primary">add</button>
           
            <div>2 Projects were added</div>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<style scoped>
.session2{
    display: flex;
    width:100%;
    flex-direction: row-reverse;
    justify-content: space-around;
    margin-top:80px;
    margin-left: auto;
    margin-right: auto;
}

.left{
    width:350px;
    padding: 50px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 3rem;
}
.right{
    width:800px;
    border: 1px solid black;
    height:500px;
}
.small-text{
    font-size: small;
    margin-left: 10px;
    color:rgb(99, 97, 97);
}
</style>