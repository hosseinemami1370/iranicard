<template>

<div class="container">
    
<!-- <b-button></b-button> -->
  <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
  <span class="mr-auto">{{email}}</span>
  <side-bar>
  
    <sidebar-item
      :link="{
        name: 'Dashboards',
        icon: 'ni ni-shop text-primary',
      }"
    >
      <sidebar-item
        :link="{ name: 'Dashboard', path: '/dashboard' }"
      ></sidebar-item>
      <sidebar-item
        :link="{ name: 'Alternative', path: '/alternative' }"
      ></sidebar-item>
    </sidebar-item>

  </template>
</side-bar>
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
          email:localStorage.getItem('data')
      }
  }
}

</script>

<style>

</style>