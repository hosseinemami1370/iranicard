<template>
  <b-card title="LOGIN" style="max-with:40rem" class="mt-5" v-if="show">
      <b-form @submit=".">
          <b-form-input id="email" placeholder="Enter Email">

          </b-form-input>
          <b-form-input id="password" placeholder="Enter passworf">

          </b-form-input>
          <div class="mt-2">
              <b-button type="submit" >{{ isLogin ? 'Login' : 'Sign Up' }}</b-button>
              <b-button type="bottun" style="margin-left:10px" @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</b-button>
          </div>
      </b-form>
  </b-card>
</template>

<script>
export default {

}
</script>

<style>

</style>