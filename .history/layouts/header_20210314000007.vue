<template>
  <Header :visibelLogout="visibelLogout" />
  
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
    },
    mounted:()=>{
      this.$store.dispatch('setVisible',{
        visibelLogout:!this.visibelLogout
      })
    }
  }
}
</script>

<style>

</style>