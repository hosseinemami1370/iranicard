<template>
  <div class="container">
    <!-- <b-button></b-button> -->
    <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
    <span class="mr-auto">{{ email }}</span>
    <nav
      id="sidenav-main"
      class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white"
    >
      <div class="container-fluid">
        <button
          type="button"
          data-toggle="collapse"
          aria-label="Toggle navigation"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span><span></span></button
        ><a href="#/" class="navbar-brand active"
          ><img src="img/brand/green.png" alt="..." class="navbar-brand-img"
        /></a>
        <ul class="nav align-items-center d-md-none">
          <li data-v-9e976cde="" class="nav-item dropdown">
            <a
              data-v-9e976cde=""
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              class="nav-link nav-link-icon"
              ><i data-v-9e976cde="" class="ni ni-bell-55"></i
            ></a>
            <ul data-v-9e976cde="" class="dropdown-menu dropdown-menu-right">
              <a data-v-9e976cde="" href="#" class="dropdown-item">Action</a
              ><a data-v-9e976cde="" href="#" class="dropdown-item"
                >Another action</a
              >
              <div data-v-9e976cde="" class="dropdown-divider"></div>
              <a data-v-9e976cde="" href="#" class="dropdown-item"
                >Something else here</a
              >
            </ul>
          </li>
          <li data-v-9e976cde="" class="nav-item dropdown">
            <a data-v-9e976cde="" href="#" role="button" class="nav-link"
              ><div data-v-9e976cde="" class="media align-items-center">
                <span data-v-9e976cde="" class="avatar avatar-sm rounded-circle"
                  ><img
                    data-v-9e976cde=""
                    alt="Image placeholder"
                    src="img/theme/team-1.jpg"
                /></span></div
            ></a>
            <ul data-v-9e976cde="" class="dropdown-menu dropdown-menu-right">
              <div data-v-9e976cde="" class="dropdown-header noti-title">
                <h6 data-v-9e976cde="" class="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="#/profile" class="dropdown-item" data-v-9e976cde=""
                ><i class="ni ni-single-02"></i><span>My profile</span></a
              ><a href="#/profile" class="dropdown-item" data-v-9e976cde=""
                ><i class="ni ni-settings-gear-65"></i><span>Settings</span></a
              ><a href="#/profile" class="dropdown-item" data-v-9e976cde=""
                ><i class="ni ni-calendar-grid-58"></i><span>Activity</span></a
              ><a href="#/profile" class="dropdown-item" data-v-9e976cde=""
                ><i class="ni ni-support-16"></i><span>Support</span></a
              >
              <div data-v-9e976cde="" class="dropdown-divider"></div>
              <a data-v-9e976cde="" href="#!" class="dropdown-item"
                ><i data-v-9e976cde="" class="ni ni-user-run"></i
                ><span data-v-9e976cde="">Logout</span></a
              >
            </ul>
          </li>
        </ul>
        <div
          id="sidenav-collapse-main"
          class="navbar-collapse collapse show"
          style="display: none"
        >
          <div class="navbar-collapse-header d-md-none">
            <div class="row">
              <div class="col-6 collapse-brand">
                <a href="#/" class="active"
                  ><img src="img/brand/green.png"
                /></a>
              </div>
              <div class="col-6 collapse-close">
                <button
                  type="button"
                  data-toggle="collapse"
                  aria-label="Toggle navigation"
                  class="navbar-toggler"
                >
                  <span class="navbar-toggler-icon"></span><span></span>
                </button>
              </div>
            </div>
          </div>
          <ul class="navbar-nav">
            <a
              href="#/dashboard"
              class="nav-item router-link-exact-active active"
              aria-current="page"
              ><!----><!----><a
                href="/dashboard"
                class="nav-link router-link-exact-active active"
                aria-current="page"
                ><i class="ni ni-tv-2 text-primary"></i
                ><span class="nav-link-text">Dashboard</span></a
              ></a
            ><a href="#/icons" class="nav-item"
              ><!----><!----><a href="/icons" class="nav-link"
                ><i class="ni ni-planet text-blue"></i
                ><span class="nav-link-text">Icons</span></a
              ></a
            ><a href="#/maps" class="nav-item"
              ><!----><!----><a href="/maps" class="nav-link"
                ><i class="ni ni-pin-3 text-orange"></i
                ><span class="nav-link-text">Maps</span></a
              ></a
            ><a href="#/profile" class="nav-item"
              ><!----><!----><a href="/profile" class="nav-link"
                ><i class="ni ni-single-02 text-yellow"></i
                ><span class="nav-link-text">User Profile</span></a
              ></a
            ><a href="#/tables" class="nav-item"
              ><!----><!----><a href="/tables" class="nav-link"
                ><i class="ni ni-bullet-list-67 text-red"></i
                ><span class="nav-link-text">Tables</span></a
              ></a
            ><a href="#/login" class="nav-item"
              ><!----><!----><a href="/login" class="nav-link"
                ><i class="ni ni-key-25 text-info"></i
                ><span class="nav-link-text">Login</span></a
              ></a
            ><a href="#/register" class="nav-item"
              ><!----><!----><a href="/register" class="nav-link"
                ><i class="ni ni-circle-08 text-pink"></i
                ><span class="nav-link-text">Register</span></a
              ></a
            >
          </ul>
          <hr class="my-3" />
          <h6 class="navbar-heading text-muted">Documentation</h6>
          <ul class="navbar-nav mb-md-3">
            <li class="nav-item">
              <a
                href="https://www.creative-tim.com/learning-lab/bootstrap-vue/alerts/argon-dashboard"
                class="nav-link"
                ><i class="ni ni-spaceship"></i> Getting started
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.creative-tim.com/learning-lab/bootstrap-vue/colors/argon-dashboard"
                class="nav-link"
                ><i class="ni ni-palette"></i> Foundation
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.creative-tim.com/learning-lab/bootstrap-vue/alerts/argon-dashboard"
                class="nav-link"
                ><i class="ni ni-ui-04"></i> Components
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
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