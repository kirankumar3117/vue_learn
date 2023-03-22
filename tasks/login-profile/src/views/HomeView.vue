<script >
import ProfileUpdatePage from '@/components/Home/ProfileUpdatePage.vue';
import protectedRoute from "@/mixins/protectedRoute"
export default {
  components: {
    ProfileUpdatePage
  },
  mixins:[protectedRoute]
}
</script>

<template>
  <ProfileUpdatePage/>
</template>
