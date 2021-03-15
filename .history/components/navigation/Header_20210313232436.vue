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



<style>

</style>