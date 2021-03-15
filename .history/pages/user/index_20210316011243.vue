<template>
  
  <b-row>
   <b-col><div style="width: 18rem;">
  <div class="card card-stats">
    <!-- Card body -->
    <div class="card-body">
      <div class="row">
        <div class="col">
            <h5 class="card-title text-uppercase text-muted mb-0">New users</h5>
            <span class="h2 font-weight-bold mb-0">2,356</span>
        </div>
        <div class="col-auto">
          <div class="icon icon-shape bg-orange text-white rounded-circle shadow">
              <i class="ni ni-chart-pie-35"></i>
          </div>
        </div>
      </div>
      <p class="mt-3 mb-0 text-sm">
          <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
          <span class="text-nowrap">Since last month</span>
      </p>
    </div>
  </div>
</div></b-col>
   <b-col>
     <div style="width: 18rem;">
  <div class="card card-stats">
    <!-- Card body -->
    <div class="card-body">
      <div class="row">
        <div class="col">
            <h5 class="card-title text-uppercase text-muted mb-0">New users</h5>
            <span class="h2 font-weight-bold mb-0">2,356</span>
        </div>
        <div class="col-auto">
          <div class="icon icon-shape bg-orange text-white rounded-circle shadow">
              <i class="ni ni-chart-pie-35"></i>
          </div>
        </div>
      </div>
      <p class="mt-3 mb-0 text-sm">
          <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
          <span class="text-nowrap">Since last month</span>
      </p>
    </div>
  </div>
</div>
   </b-col>
   <b-col>
     <div style="width: 18rem;">
  <div class="card card-stats">
    <!-- Card body -->
    <div class="card-body">
      <div class="row">
        <div class="col">
            <h5 class="card-title text-uppercase text-muted mb-0">New users</h5>
            <span class="h2 font-weight-bold mb-0">2,356</span>
        </div>
        <div class="col-auto">
          <div class="icon icon-shape bg-orange text-white rounded-circle shadow">
              <i class="ni ni-chart-pie-35"></i>
          </div>
        </div>
      </div>
      <p class="mt-3 mb-0 text-sm">
          <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
          <span class="text-nowrap">Since last month</span>
      </p>
    </div>
  </div>
</div>
   </b-col>
     



  
   


    <!-- <b-row>
      <b-col>
        <div>
          <b-card
            title="Card Title"
            img-src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="javascript:;" variant="primary"
              >Go somewhere</b-button
            >
          </b-card>
        </div>
        </b-col>
      <b-col>
        <div>
          <b-card
            title="Card Title"
            img-src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="javascript:;" variant="primary"
              >Go somewhere</b-button
            >
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div>
          <b-card
            title="Card Title"
            img-src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="javascript:;" variant="primary"
              >Go somewhere</b-button
            >
          </b-card>
        </div>
      </b-col>
    </b-row> -->
  </b-row>
</template>

<script>
export default {
  layout: "header",
  middleware: ["auth","check-auth"],
  computed: {
    
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