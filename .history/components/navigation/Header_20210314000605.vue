<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">IRANICARD</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" v-if="visibelLogout" >Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>


export default {
  components: {
  
  },
  props: {
    visibelLogout: {
      type: Boolean,
      default: false
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
}
</script>



<style>

</style>