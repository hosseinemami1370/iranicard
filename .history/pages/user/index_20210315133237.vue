<template>
  <b-container class="bv-example-row">
    <card>
  <!-- Card body -->
  <b-row align-v="center">
    <b-col md="auto">
      <!-- Avatar -->
      <a href="javascript:;" class="avatar avatar-xl rounded-circle">
        <img alt="Image placeholder" src="">
      </a>
    </b-col>
    <b-col class="ml--2">
      <h4 class="mb-0">
        <a href="javascript:;">John Snow</a>
      </h4>
      <p class="text-sm text-muted mb-0">Working remoteley</p>
      <span class="text-success">● </span>
      <small>Active</small>
    </b-col>
    <b-col md="auto">
      <base-button type="primary" size="sm">Add</base-button>
    </b-col>
  </b-row>
</card>
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