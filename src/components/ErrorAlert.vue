<template>
    <v-alert
      type="error"
    >
      {{ this.$props.errMsg }}
    </v-alert>
</template>

<script>
  export default {
    props: ['errMsg']
  }
</script>

