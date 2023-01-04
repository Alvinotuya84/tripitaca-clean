<template>
  <div >
         <div style="" >
              <div style="height:100px;width:250px;border-radius:35px;border-bottom-left-radius:0px;border-top-left-radius:35px;border-bottom-right-radius:0px;justify-content:center;align-items:center;display:flex"  class="white pa-4">
              <div>
                   <v-btn v-if="sw==1" @click="sw=1" large   style="text-transform:none" rounded elevation="0" class="blue mr-1 lighten-5 font-7 weight-600"><v-icon color="blue" size="18">mdi-key-chain-variant </v-icon>Stays</v-btn>
                   <v-btn v-else large @click="sw=1"  text  style="text-transform:none"  rounded elevation="0" color="black" class=" font-7 weight-600"><v-icon color="blue" size="18">mdi-key-chain-variant </v-icon>Stays</v-btn>
               </div>
              <div>
                   <v-btn v-if="sw==2" @click="sw=2" large  color="blue lighten-5"  style="text-transform:none" rounded elevation="0" class="font-7 weight-600"><v-icon color="blue" size="18">mdi-bag-personal-tag </v-icon>Packages</v-btn>
                   <v-btn v-else @click="sw=2" large text color="black"  style="text-transform:none" rounded elevation="0" class="font-7 weight-600"><v-icon color="blue" size="18">mdi-bag-personal-tag </v-icon>Packages</v-btn>
              </div>
           </div>
         <v-row align="end" justify="center" class="pa-4 white search-container" no-gutters>
                <div class="pa-6 mr-4" style="border:1px solid grey;border-radius:35px;height:140px;display:flex;justify-content:center;align-items:center;">
                     <div style="flex:2;">
                         <br>
                         <v-avatar size="26" style="border:2px dotted grey">
                            <v-icon size="16">mdi-map-marker </v-icon>
                        </v-avatar>
                        <v-text-field placeholder="location" color="white" background-color="white" class="ml-n3 mb-n1 weight-600 font-7"  solo dense flat></v-text-field>
                    </div>

                </div>
                <div class="pa-6 mr-4" style="width:40%;border:1px solid grey;border-radius:35px;height:140px;display:flex;justify-content:center;align-items:center">
                    <div style="flex:2;">
                        <v-menu

                        :close-on-content-click="false"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            label="CheckIn"
                            hint="MM/DD/YYYY format"
                            persistent-hint
                            prepend-icon="mdi-calendar"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker  no-title ></v-date-picker>
                      </v-menu>
                    </div>
                    <div style="flex:1">
                        <v-avatar size="26" style="border:2px dotted grey">
                            <v-icon size="16">mdi-calendar-multiselect</v-icon>
                        </v-avatar>
                    </div>
                     <div style="flex:2;">
                    <v-menu

                    :close-on-content-click="false"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        label="CheckOut"
                        hint="MM/DD/YYYY format"
                        persistent-hint
                        prepend-icon="mdi-calendar"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker  no-title ></v-date-picker>
                  </v-menu>
                    </div>
                </div>
                <router-link to="/listing">
                    <v-btn x-large style="height:100px;width:100px;border-radius:50%" color="rgb(255, 8, 0)" dark ><v-icon size="35">mdi-magnify</v-icon></v-btn>

                  </router-link>
         </v-row>
     </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            sw:1
        }
    }
}
</script>

<style>
.search-container{
    border-radius:35px;
    height:200px;
    width:90%;
    border-top-left-radius:0px;
}

@media screen and (max-width:500px) {
 .search-container{
    border-radius:35px;
    height:100px;
    width:90%;
    border-top-left-radius:0px;
}
}
</style>