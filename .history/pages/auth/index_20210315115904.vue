<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <b-card
        title="LOGIN"
        style="max-with: 10rem"
        class="mt-5 text-center"
        img-src="@/assets/download.png"
        img-top
      >
        <b-form @submit.prevent="onSubmit">
          <b-form-input
            :class="{ error: $v.email.$error }"
            id="email"
            v-model.trim="email"
            @input="$v.email.$touch()"
            placeholder="Enter Email"
          >
          </b-form-input>
          <div v-if="$v.email.$dirty">
            <p class="error-message" v-if="!$v.email.email">
              Please enter a valid email address.
            </p>
            <p class="error-message" v-if="!$v.email.required">
              Email must not be empty.
            </p>
          </div>

          <b-form-input
            type="password"
            :class="{ error: $v.password.$error }"
            class="mt-2"
            required
            id="password"
            v-model.trim="password"
            @input="$v.password.$touch()"
            placeholder="Enter password"
          >
          </b-form-input>
          <div v-if="$v.password.$dirty">
            <p class="error-message" v-if="!$v.password.required">
              Password must not be empty.
            </p>
          </div>

          <b-form-input
            type="password"
            v-if="!isLogin"
            :class="{ error: $v.repeatPassword.$error }"
            class="mt-2"
            required
            id="password2"
            v-model.trim="repeatPassword"
            @input="$v.repeatPassword.$touch()"
            placeholder="Re-type password"
          >
            <div v-if="$v.repeatPassword.$dirty">
              <p class="error-message" v-if="!$v.repeatPassword.sameAsPassword">
                Passwords must be identical.
              </p>

              <p class="error-message" v-if="!$v.repeatPassword.required">
                Password must not be empty.
              </p>
            </div>
          </b-form-input>
          <div class="mt-2">
            <b-button type="submit" :disabled="$v.$invalid">{{
              isLogin ? "Login" : "Sign Up"
            }}</b-button>
            <b-button
              type="button"
              style="margin-left: 10px"
              @click="isLogin = !isLogin"
              >Switch to {{ isLogin ? "Signup" : "Login" }}</b-button
            >
          </div>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  layout: "admin",
  // middelware:["check-login"],
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
      repeatPassword: "",
      message: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      required,
      minLength: minLength(6),
      sameAsPassword: sameAs("password"),
    },
  },

  methods: {
    onSubmit() {
      if (!this.$v.$invalid) {
        this.$store
          .dispatch("authenticationUser", {
            email: this.email,
            password: this.password,
            isLogin: this.isLogin,
          })
          .then(() => {
            this.$router.push("/user");
          });
      }
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
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