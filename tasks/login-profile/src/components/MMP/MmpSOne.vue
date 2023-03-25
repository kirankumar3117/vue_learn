<template>
    <div class="session1">
        <div class="left">
            <label for="">Name* : </label>
            <input type="text" class="form-control">
            <label for="">Proffesion* : </label>
            <input type="text" class="form-control">
            <label for="">Description*: </label>
            <textarea name="" id="" cols="30" rows="3" class="form-control"></textarea>
            <label for="">Profile Image : </label>
            <input type="file" accept="image*" class="form-control">
            <label for="">Resume : </label>
            <input type="file" class="form-control">
        </div>
        <div class="right">

        </div>
    </div>
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
    width:800px;
    border: 1px solid black;
    height:500px;
}
</style>