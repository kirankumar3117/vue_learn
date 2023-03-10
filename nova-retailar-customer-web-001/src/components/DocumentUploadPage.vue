<template>
  <div>
    <div class="documentContainer bg-white">
      <div class="bg-white head">
        <h3 class="bg-white">Let's get you verified!</h3>
        <p class="mt-2 bg-white">Which photo ID do you want to use?</p>
      </div>
      <div class="outerCard bg-white">
        <!-- Ghana card div start -->

        <div class="bg-white" id="ghana">
          <div class="bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="currentColor"
              class="bi bi-person-vcard"
              viewBox="0 0 16 16"
            >
              <path
                d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"
              />
              <path
                d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"
              />
            </svg>
          </div>
          <div class="bg-white mt-4">Ghana Card</div>
        </div>

        <!-- Ghana card div end -->

        <div class="fileUpload">
          <input
            type="file"
            class="form-control"
            accept="image/*"
            @change="handleClick"
            id="Ghana Card"
          />
        </div>

        <!-- Passport start -->

        <div class="bg-white">
          <div class="bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="currentColor"
              class="bi bi-credit-card-2-front"
              viewBox="0 0 16 16"
            >
              <path
                d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"
              />
              <path
                d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <div class="bg-white mt-4">Passport</div>
        </div>

        <!-- Passport end -->

        <div class="fileUpload">
          <input
            type="file"
            class="form-control"
            @change="handleClick"
            id="Passport"
            accept="image/*"
          />
        </div>

        <!-- Voter's id start -->
        <div class="bg-white">
          <div class="bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="currentColor"
              class="bi bi-person-vcard"
              viewBox="0 0 16 16"
            >
              <path
                d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"
              />
              <path
                d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"
              />
            </svg>
          </div>
          <div class="bg-white mt-4">Voter's ID</div>
        </div>

        <!-- Voter's id end -->

        <div class="fileUpload">
          <input
            type="file"
            class="form-control"
            @change="handleClick"
            id="Voter's ID"
            accept="image/*"
          />
        </div>

        <!-- Driver licence start -->
        <div class="bg-white">
          <div class="bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="currentColor"
              class="bi bi-person-vcard"
              viewBox="0 0 16 16"
            >
              <path
                d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"
              />
              <path
                d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"
              />
            </svg>
          </div>
          <div class="bg-white mt-4">Driver Licence</div>
        </div>

        <!-- Driver licence ends -->

        <div class="fileUpload">
          <input
            type="file"
            class="form-control"
            @change="handleClick"
            id="Driving Licence"
            accept="image/*"
          />
        </div>

        <br/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DocumentUploadPage",
  methods: {
    handleClick(e) {
      // console.log(e.srcElement.innerHTML)
      this.id = e.srcElement.id;
      this.imageUrl = URL.createObjectURL(e.target.files[0]);
      this.imageName = e.target.value.replace(/^.*[\\\/]/, "");
      let userDocumentData = {
        id: this.id,
        imageUrl: this.imageUrl,
        imageName: this.imageName,
      };

      this.$emit("user-document-details", userDocumentData);
    },
  },
  data() {
    return {
      imageUrl: "",
      id: "",
      imageName: "",
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
}
@media screen and (max-width: 420px) {
  .documentContainer {
    width: 100%;
  }
}
.head {
  position: relative;
  top: 40px;
}
.outerCard {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  margin-top: 60px;
}
.outerCard > div {
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-left: 10%;
  height: 80px;
  text-align: center;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.outerCard > div svg {
  width: 100px;
  height: 60px;
  border-radius: 7px;
  color: white;
  background-color: #00263d;
  margin: 10px;
}
.fileUpload {
  position: relative;
  margin-top: -95px;
  opacity: 0;
}
/* .passportClass{
    margin-top:-100px
} */
</style>
