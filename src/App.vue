<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
  import JSEncrypt  from "jsencrypt";

  export default {
    name: 'App',
    components: {
    },
    async created() {
      let res = await this.$axios.post('/ks/a-k')
      let target = res.data.data;
      localStorage.setItem("SK", this.$generateRandomString(32));
      
      const encrypt = new JSEncrypt();
      encrypt.setPublicKey(target["PK"]);
      const encrypted = encrypt.encrypt(localStorage.getItem("SK"));
      
      await this.$axios.post('/ks/s-k', {
          sK: encrypted
      });       
    },
  };
</script>
