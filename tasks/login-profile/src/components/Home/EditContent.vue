<template>
    <div>
            <form action="" id="form">
                <label for="">Email :</label>
                <input type="text" class="form-control">
                <label for="" >Adhar No :</label>
                <input type="text" class="form-control">
                <label for="">PAN No : </label>
                <input type="text" class="form-control">
                <label for="">Mobile No :</label>
                <input type="text" class="form-control">
                <label for="">Native Address : </label>
                <input type="text" class="form-control">
                <div>
                    <label for="" class="form-check-label">Use it for current address  </label>
                    <input type="checkbox" name="" id="" class="form-check-input mx-2 my-1 mt-3">
                </div>
                <div>
                    <label for="">Current address : </label>
                    <input type="text" class="form-control">
                </div>
                <label for="">Skills :</label>
                <textarea name="" id="" cols="30" rows="3" class="form-control"></textarea>
            </form>
        </div>
</template>
<script>
import "../../../public/profile.css"
export default{
    name:'EditContent'
}
</script>