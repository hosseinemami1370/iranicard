<template>
  <Header />
   <nuxt/>
</template>

<script>
import Header from '@/components/navigation/Header'
export default {
    components:{
        Header
    },
     computed: {
    loadedLogOut() {
      return this.$store.getters.visibelLogout
    }
  }
}
</script>

<style>

</style>