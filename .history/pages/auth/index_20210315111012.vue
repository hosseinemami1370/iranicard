<template>
 <div class="admin-auth-page">
    <div class="auth-container">
  <b-card title="LOGIN" style="max-with:10rem" class="mt-5 text-center" img-src="@/assets/download.png" img-top>
      <b-form @submit.prevent="onSubmit">
          <b-form-input  id="email"  v-model="$v.email.$model" placeholder="Enter Email">
          </b-form-input>
          <p class="error" v-if="!$v.email.required">this field is required</p>
          <p class="error" v-if="!$v.email.minLength">Field must have at least {{ $v.email.$params.minLength.min }} characters.</p>
          
          <b-form-input type="password" class="mt-2" required id="password" v-model="password" placeholder="Enter password">
          </b-form-input>
          <b-form-input type="password" v-if="isLogin" class="mt-2" required id="password2" v-model="password2" placeholder="Re-type password">

          </b-form-input>
          <div class="mt-2">
              <b-button type="submit" >{{ isLogin ? 'Login' : 'Sign Up' }}</b-button>
              <b-button type="button" style="margin-left:10px" @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</b-button>
          </div>
      </b-form>
  </b-card>
    </div>
    </div>
</template>

<script>
import { required, minLength,email } from "vuelidate/lib/validators"

export default {
  layout: "admin",
  // middelware:["check-login"],
data() {
    return {
      isLogin: true,
      email:'',
      password:'',
      password2:'',
      message:''
    }
},
validations: {
   
     email: {
       required,
        minLength: minLength(6)
     },
   },
 
methods:{
    onSubmit(){
     this.$store.dispatch("authenticationUser",{
       email:this.email,
       password:this.password,
       isLogin:this.isLogin,
       
     }).then(()=>{
       this.$router.replace('/user')
     })
    }
  }
}
</script>

<style scoped>
.error{
  color:red;
}
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