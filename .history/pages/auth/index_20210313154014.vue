<template>
 <div class="admin-auth-page">
    <div class="auth-container">
  <b-card title="LOGIN" style="max-with:10rem" class="mt-5">
      <b-form @submit.prevent="onSubmite">
          <b-form-input  id="email" v-model="email" placeholder="Enter Email">

          </b-form-input>
          <b-form-input class="mt-2" id="password" v-model="password" placeholder="Enter passworf">

          </b-form-input>
          <div class="mt-2">
              <b-button type="submit" >{{ isLogin ? 'Login' : 'Sign Up' }}</b-button>
              <b-button type="bottun" style="margin-left:10px" @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</b-button>
          </div>
      </b-form>
  </b-card>
    </div>
    </div>
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

<style scoped>
    .admin-auth-page {
  padding: 20px;
}

.auth-container {
  /* border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc; */
  width: 300px;
  margin: auto;
  padding: 10px;
  /* box-sizing: border-box; */
}
</style>