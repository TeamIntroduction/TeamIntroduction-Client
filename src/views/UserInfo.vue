<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="500"
    >
      <v-toolbar
        color="deep-purple accent-4"
        dark
      >
        <v-toolbar-title>User Info</v-toolbar-title>
      </v-toolbar>

      <v-list subheader>
        <v-list-item
          v-for="info in $route.params.serverDtoList"
          :key="info.id"
          style="display: flex; flex-direction: column; justify-content: left" 
        >
          <v-list-item-content
            v-for="(value, key) in info"
            :key="key"
          >
            <v-list-item-title> {{key}} : {{ value }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>

</template>
<script>
    export default {
        name: 'UserInfo',
        props: {
            id: {
              type: Number,
              default: 0
            },
            serverDtoList: {
              type: Array
            },
        }
    }
</script>