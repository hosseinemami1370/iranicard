<template>
  <b-container class="bv-example-row">
   
   
  </b-container>
</template>

<script>
export default {
  layout: "header",
  middleware: ["auth","check-auth"],
  computed: {
    
  },
  data() {
    return {
      email: localStorage.getItem("data"),
    };
  },
};
</script>

<style>
</style>