<template>
  <div>
    <DocumentUploadPage
      @user-document-details="getDocumentDetails"
      v-if="!documentUploadSuccess"
    />
    <DocumentShowDetails
      v-if="documentUploadSuccess"
      :documentData="documentData"
      @user-details="handleUser"
    />
    <!-- <OtpError/> -->
  </div>
</template>
<script>
import DocumentUploadPage from "@/components/DocumentUploadPage.vue";
import DocumentShowDetails from "./DocumentShowDetails.vue";
// import OtpError from "../components/OtpError.vue";
export default {
  components: {
    DocumentUploadPage,
    DocumentShowDetails,
  },
  props: {
    documentUploadSuccess: Boolean,
    documentData: Object,
  },
  methods: {
    getDocumentDetails(obj) {
      if (obj.imageName.endsWith("pdf") || obj.imageName.endsWith("docx")) {
        this.$emit("user-document-details", true);
      } else {
        this.$emit("user-document-details", obj);
      }
    },
    handleUser(obj) {
      this.$emit("user-details", obj);
    },
  },
};
</script>
<style></style>
