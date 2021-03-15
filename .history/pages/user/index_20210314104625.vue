<template>
  
</template>

<script>

export default {
layout: "header",
middleware: ['check-auth', 'auth'],
computed: {
    loadedData() {
      return this.$store.getters.loadedData
    }
  }
}

</script>

<style>

</style>