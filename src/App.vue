<template>
  <v-app class="animate__animated animate__fadeIn animate__slow">
    <v-app-bar
      :color="color"

      class=""
      fixed
      style="padding:0 5%"
      dark
      flat
    >
    <router-link
    to="/"
    >
      <div class="d-flex align-center">
        <v-img
    class="mx-2"
    src="./assets/logo.png"
    max-height="100"
    max-width="100"
    contain
  ></v-img>
</div>
    </router-link>
      <v-spacer>

      </v-spacer>
      <div v-if="isTop" class=" d-sm-flex">
        <div class="d-flex align-center">
          <v-dialog
          transition="dialog-top-transition"
          max-width="900"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="white"
              class="black--text"
              v-bind="attrs"
              v-on="on"
            >Where are you going? <v-icon color="rgb(255, 8, 0)" size="18">mdi-magnify </v-icon></v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <search-utility-home/>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog.value = false"
                >Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>
      </div>
      <v-spacer>

      </v-spacer>
     <div class="d-none d-sm-flex">
       <div class="d-flex align-center">

        <v-btn v-if="!isTop" style="text-transform:none" class="font-7"  text plain>Places To Stay</v-btn>
        <router-link to="/listing">
          <v-btn style="text-transform:none" class="font-7" v-bind:class="{  'black--text': isTop }" text plain>Packages</v-btn>
        </router-link>
      <v-btn style="text-transform:none" class="font-7" v-bind:class="{  'black--text': isTop }" text plain>List Your Property</v-btn>

      <a :href="getGoogleUrl('/')">
        <v-img
        max-height="40"
        max-width="40"
        src="https://www.tripitaca.com/_nuxt/img/profile.c3f78de.png"
      ></v-img>
      </a>

     </div>
     </div>
     <v-app-bar-nav-icon class="d-flex d-sm-none"/>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <v-footer class="bg-1 ">
     <v-container>
       <div class="d-sm-none d-md-flex">
          <v-row no-gutters style="" class="footer d-none d-sm-flex ">
            <p class="font-7">© 2023 Tripitaca LLC - All right reserved.</p>
            <v-spacer></v-spacer>
            <div class="jst" style="display:flex">
                <v-btn style="flex:1;text-transform:none" class="font-7 mr-2" x-small text plain>Review</v-btn>
                <v-btn style="flex:1;text-transform:none" class="font-7 mr-2" x-small text plain>Tips</v-btn>
                <v-btn style="flex:1;text-transform:none" class="font-7 mr-2" x-small text plain>Alerts</v-btn>
                <v-btn style="flex:1;text-transform:none" class="font-7 mr-2" x-small text plain>Blog</v-btn>
            </div>
      </v-row>
       </div>
       <v-row no-gutters style="width:100%" class="footer d-flex d-sm-none d-none d-sm-flex d-md-none">

            <v-spacer></v-spacer>
            <div>
              <div style="display:flex">
                <v-btn style="flex:1;text-transform:none" class="font-7 mr-2" x-small text plain>Review</v-btn>
                <v-btn style="flex:1;text-transform:none" class="font-7 mr-2" x-small text plain>Tips</v-btn>
                <v-btn style="flex:1;text-transform:none" class="font-7 mr-2" x-small text plain>Alerts</v-btn>
                <v-btn style="flex:1;text-transform:none" class="font-7 mr-2" x-small text plain>Blog</v-btn>
            </div>
             <p class="font-7 text-center">© 2022 Tripitaca LLC - All right reserved.</p>
            </div>
            <v-spacer></v-spacer>
      </v-row>
     </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import "./css/fonts.css"

import searchUtilityHome from "./components/Home/search.utility.home.vue";
import store from './store'
export default {

  components:{
    searchUtilityHome
  },
  name: 'App',

  data: () => ({
    //
    color: "transparent",
    colo: "white",
    isTop:false
  }),
  methods:{
    getGoogleUrl  (from) {
  const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;

  const options = {
    redirect_uri: 'http://localhost:8080/api/sessions/oauth/google',
    client_id: '913198352759-omoamqfibo1p3khvu5jaho5n11vn8c8e.apps.googleusercontent.com',
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
    state: from,
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
}
  },
  computed: {
    store: function () {
      return store.state.user.token;
    }
  },

  mounted() {
    console.log(process.env.VITE_SERVER_ENDPOINT)
    const navbar = document.getElementById("nav-bar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        this.color = "white";
        this.colo = "grey";
        this.isTop = true;
        navbar.classList.add("scale-in-center");
      } else {
        this.color = "transparent";
        this.colo = "white";
        this.isTop = false;
        navbar.classList.remove("scale-in-center");
        navbar.classList.add("scale-out-center");
      }
    });
  },
};
</script>
<style>
.footer{
  padding:4%;
}
@media screen and (max-width:600px) {
 .footer{
  padding:10%;
}

}
</style>
