<template>
  <div>
    <div class="documentContainer">
      <br />
      <div>
        <h3 class="bg-white">Verify {{ documentData.id }} details</h3>
      </div>
      <div class="bg-white">
        <img :src="documentData.imageUrl" alt="" class="image" />
      </div>

      <div class="form">
        <p v-if="fieldError" class="text-danger bg-white mt-3">
          Please fill all the details
        </p>
        <label>Name on Card</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Name On Card"
          v-model="name"
        />
        <label>Date of Birth</label>
        <input type="Date" class="form-control" v-model="dateOfBirth" />
        <label>Card Number</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Name On Card"
          v-model="cardNumber"
        />
        <label>Expiry Date</label>
        <input type="Date" class="form-control" v-model="expiryDate" />
      </div>

      <br />
      <div class="bg-white">
        <button type="button" class="button" @click="handleSubmit">
          Complete
        </button>
      </div>

      <br />
    </div>
  </div>
</template>
<script>
export default {
  name: "DocumentShowDetails",
  props: {
    documentData: Object,
  },
  created() {
    // console.log(this.documentData)
  },
  methods: {
    handleSubmit() {
      let obj = {
        name: this.name,
        dateOfBirth: this.dateOfBirth,
        cardNumber: this.cardNumber,
        expiryDate: this.expiryDate,
        ID: this.documentData.id,
      };

      let check = (obj) => {
        if (
          obj.name == "" ||
          obj.dateOfBirth == "" ||
          obj.cardNumber == "" ||
          obj.expiryDate == ""
        ) {
          return true;
        } else {
          return false;
        }
      };

      if (check(obj)) {
        this.fieldError = true;
      } else {
        this.$emit("user-details", obj);
      }
    },
  },
  data() {
    return {
      name: "",
      dateOfBirth: "",
      cardNumber: "",
      expiryDate: "",
      fieldError: false,
    };
  },
};
</script>
<style scopped>
.documentContainer {
  /* position: relative; */
  margin-top: 130px;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 7px;
  background-color: white;
}
@media screen and (max-width: 420px) {
  .documentContainer {
    width: 100%;
  }
}
.image {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.form {
  background-color: white;
}
.form > label {
  background-color: white;
  margin-left: -230px;
  margin-top: 15px;
}
.form > input {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  height: 50px;
}
.button {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  height: 50px;
  background-color: #00263d;
  color: white;
  font-weight: bold;
  border-radius: 7px;
}
</style>
