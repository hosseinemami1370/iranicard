<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">IRANICARD</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" >Disabled</b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <!-- <b-dropdown-item @click="onLogout">Sign Out</b-dropdown-item> -->
                <AppButton style="margin-left: 10px" @click="onLogout">Logout</AppButton>
        </b-nav-item-dropdown>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>


export default {
  middleware: ["check-auth", "auth"],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/admin/auth");
    }
  }
  
}
</script>



<style>

</style>