<template>
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
        <router-link to="listing">
          <v-btn x-large style="height:50px;width:50px;border-radius:50%" color="rgb(255, 8, 0)" dark ><v-icon size="35">mdi-magnify</v-icon></v-btn>

        </router-link>
 </v-row>
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
