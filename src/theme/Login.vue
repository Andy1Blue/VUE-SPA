<template>
  <div class="content">
    <div v-if="isAuthenticated">
      Hello user!
      <!-- <p>Name: {{profile.firstName}}</p> -->
    </div>
    <button v-if="isAuthenticated" @click="logout()">Logout</button>
    <div v-else>
      <h2>Login</h2>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" v-model="username" type="text" placeholder="Your username" />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Password</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" v-model="password" type="password" placeholder="Your password" />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button @click="login()" class="button is-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import appService from "../app.service";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: ""
      // profile: {}
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  },
  // watch: {
  // isAuthenticated: function(val) {
  //   if (val) {
  //     appService.getProfile().then(profile => {
  //       this.profile = profile;
  //     });
  //   } else {
  //     this.profile = {};
  //   }
  //   eventBus.$emit("authStatusUpdate", val);
  // }
  // },
  methods: {
    ...mapActions({
      logout: "logout"
    }),
    login() {
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.username = "";
          this.password = "";
        });
      //   appService
      //     .login({ username: this.username, password: this.password })
      //     .then(data => {
      //       window.localStorage.setItem("token", data.token);
      //       window.localStorage.setItem("tokenExpiration", data.expiration);
      //       this.isAuthenticated = true;
      //       this.username = "";
      //       this.password = "";
      //     })
      //     .catch(() => window.alert("Could not login!"));
      // },
      // logout() {
      // window.localStorage.setItem("token", null);
      // window.localStorage.setItem("tokenExpiration", null);
      // this.isAuthenticated = false;
    }
  }
  // created() {
  // let expiration = window.localStorage.getItem("tokenExpiration");
  // var unixTimestamp = new Date().getTime() / 1000;
  // if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
  // this.isAuthenticated = true;
  // }
  // }
};
</script>

<style>
</style>
