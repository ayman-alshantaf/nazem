<template>
  <v-app >
    <v-main dir="rtl">
      <router-view/>
    </v-main>
  </v-app>
</template>
<style>
@font-face {
  font-family: "DIN Next LT Arabic";
  src: local("DIN Next LT Arabic"),
  url(./assets/fonts/DINNextLTArabic-Regular-3.ttf) format("truetype");
}
body{
  font-family: "DIN Next LT Arabic", Helvetica, Arial;
}
*{
  font-size: 20px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
