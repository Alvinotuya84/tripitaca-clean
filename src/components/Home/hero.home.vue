<template>
  <div>
   <v-row align="center" justify="center" class="hero" no-gutters>
       <v-col cols="12" xl="2" lg="2" />
       <v-col cols="12" xl="8" lg="8">
         <v-container>
            <p class="font-2  font-title white--text">Let's Get Tripy</p>
          <p class="font-4 font-desc  white--text">Start paying for your trips in installments Today!</p>
         </v-container>
       </v-col>
       <v-col cols="12" xl="2" lg="2" />

    </v-row>
  </div>
</template>

<script>


  export default {
    name: 'Hero',

    components: {

    },
    data() {
    return {
      location: '',
      checkin: null,
      checkout: null,
      adults: 1,
      children: 0,
      adultsOptions: [1, 2, 3, 4, 5, 6],
      childrenOptions: [0, 1, 2, 3, 4, 5, 6],
    }
  },
  }
</script>
<style>
.border-radius-5 {
  border-radius: 5px;
}

.translucent-border {
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.hero{
  height :140vh;
  background: url('../../assets/images/hero.png');
  background-size: cover;
}
.font-title{
  font-weight: 600;
  text-align: center;
}
.font-desc{
  font-weight: 500;
  text-align: center;
}

@media screen and (max-width:600px) {
  .hero{
  height :120vh;
  background: url('../../assets/images/hero.png');
  background-size: cover;
  padding: 5%;
}
    .font-title{
      text-align: left;
      line-height: 1.2;
    }

    .font-desc{
        font-weight: 500;
        text-align: left;
    }
}
</style>
