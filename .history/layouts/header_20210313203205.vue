<template>
  <Header />
</template>

<script>
import Header from '@/components/navigation/Header'
export default {
    components:{
        Header
    },
     computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style>

</style>