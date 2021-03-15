<template>
  

<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand  ><nuxt-link class="a1" to="/">IRANICARD</nuxt-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" >Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown v-if="visible" right>
          <!-- Using 'button-content' slot -->
          
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="onLogout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item v-if="visible">
          <b-avatar  variant="info" src="https://placekitten.com/300/300"></b-avatar>
          <span class="mr-auto">{{email}}</span>
          <span class="text-success">● </span>
          <small>Active</small>
        </b-nav-item>
      </b-navbar-nav>
      
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>


export default {
  middleware: ["check-auth"],
  data(){
    return{
      visible:false,
      email:''
    }
  },
  created(){
  
     if(localStorage.getItem("token") != null || localStorage.getItem("token") != undefined) {
       this.visible=true;
        this.email=localStorage.getItem("data")
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  }
  
}
</script>



<style>
routnuxter-link a{
    text-decoration: none;
}
</style>