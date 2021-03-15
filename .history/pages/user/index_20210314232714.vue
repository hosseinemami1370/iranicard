<template>

<div class="container">
    
<!-- <b-button></b-button> -->
  <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
  <span class="mr-auto">{{}}</span>
</div>

</template>

<script>

export default {
layout: "header",
middleware: ['auth'],
computed: {
    // loadedData() {
    //   return this.$store.getters.loadedData
    // }
  },
  data(){
      return{
          email:localStorage.email
      }
  }
}

</script>

<style>

</style>