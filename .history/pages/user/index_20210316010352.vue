<template>
  <b-container class="bv-example-row">
   
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