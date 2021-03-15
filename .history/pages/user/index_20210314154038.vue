<template>
<div>
<b-button></b-button>
  <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
  <span class="mr-auto">J. Circlehead</span>
</div>
  
</template>

<script>

export default {
layout: "header",
middleware: ['auth'],
computed: {
    loadedData() {
      return this.$store.getters.loadedData
    }
  }
}

</script>

<style>

</style>