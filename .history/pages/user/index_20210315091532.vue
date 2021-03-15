<template>
<b-container class="bv-example-row">
  <b-row>
    <b-col><div>
  <b-card
    title="Card Title"
    img-src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="javascript:;" variant="primary">Go somewhere</b-button>
  </b-card>
</div></b-col>
    <b-col> <b-card no-body img-src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg" alt="Image placeholder" img-top class="card-profile">
  <b-row class="justify-content-center">
    <b-col lg="3"  class="order-lg-2">
      <div class="card-profile-image">
        <a>
          <b-img style="position: absolute;max-width: 140px;left: 50%;border: 3px solid #fff;bottom:-140;" src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg" rounded="circle" />
        </a>
      </div>
    </b-col>
  </b-row>
  <b-card-header class="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
    <div class="d-flex justify-content-between">
      <base-button type="info" size="sm" class="mr-4">Connect</base-button>
      <base-button type="default" size="sm" class="float-right">Message</base-button>
    </div>
  </b-card-header>
  <b-card-body class="pt-0">
    <b-row>
      <b-col>
        <div class="card-profile-stats d-flex justify-content-center">
          <div>
            <span class="heading">22</span>
            <span class="description">Friends</span>
          </div>
          <div>
            <span class="heading">10</span>
            <span class="description">Photos</span>
          </div>
          <div>
            <span class="heading">89</span>
            <span class="description">Comments</span>
          </div>
        </div>
      </b-col>
    </b-row>
    <div class="text-center">
      <h5 class="h3">
        Jessica Jones<span class="font-weight-light">, 27</span>
      </h5>
      <div class="h5 font-weight-300">
        <i class="ni location_pin mr-2"></i>Bucharest, Romania
      </div>
    </div>
  </b-card-body>
</b-card></b-col>
    <b-col></b-col>
  </b-row>
</b-container>
  
</template>

<script>
export default {
  layout: "header",
  middleware: ["auth"],
  computed: {
    // loadedData() {
    //   return this.$store.getters.loadedData
    // }
  },
  data() {
    return {
      email: localStorage.getItem("data"),
    };
  },
};
</script>

<style>
</style>