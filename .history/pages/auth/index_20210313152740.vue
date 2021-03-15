<template>
  <b-card title="LOGIN" style="max-with:10rem" class="mt-5" img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top >
      <b-form @submit.prevent="onSubmite">
          <b-form-input id="email" v-model="email" placeholder="Enter Email">

          </b-form-input>
          <b-form-input class="mt-2" id="password" v-model="password" placeholder="Enter passworf">

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
data() {
    return {
      isLogin: true,
      email:'',
      password:''
    }
}
}
</script>

<style>

</style>