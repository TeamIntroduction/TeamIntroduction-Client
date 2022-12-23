<template>
  <v-col>
    <v-treeview
      rounded
      activatable
      :items="items"
      @update:active="selected"
      :open.sync="open"
    >
    </v-treeview>
  </v-col>
</template>
  
<script>
  export default {
    data: () => ({
      items: [
        {
          id: 0,
          name: '부서명',
          children: [],
        },
      ],
      open:[]
    }),
    created() {
      let URL = 'http://127.0.0.1:8080/parts';
      this.$axios
        .get(URL)
        .then(res => {
          console.log(res);
          let target = res.data.data;

          Object.keys(target).forEach(i => {
            this.items[0].children.push({
              "id": target[i].id,
              "name": target[i].name,
            })
          });
          this.open.push(0);
        })
        .catch(err => console.log(err))
    },
    methods: {
      selected(node) {
        this.selection = node;
        if(node > 0) {
          this.$emit("update", node);
        }
      }
    }
  }
</script>