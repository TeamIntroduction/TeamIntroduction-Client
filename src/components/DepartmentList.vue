<template>
  <v-col>
    <v-treeview
      ref="treeview"
      rounded
      activatable
      color="warning"
      open-on-click
      :items="items"
      @update:active="selected"
      transition
      item-key="name"
      return-object
    >
    </v-treeview>
  </v-col>
</template>
  
<script>
  export default {
    data: () => ({
      items: [
        {
          name: '한화시스템 ICT',
          children: [],
        },
      ],
      open:true
    }),
    created() {
      let URL = 'http://127.0.0.1:8080/teams';
      this.$axios.get(URL)
        .then(res => {
          let target = res.data.data;
          
          Object.keys(target).forEach(i => {
            this.items[0].children.push(target[i])
          });
          this.$refs.treeview.updateAll(true);
        })
        .catch(err => console.log(err))
    },
    methods: {
      selected(node) {

        // node 선택해제
        if (node.length == 0) {
          return
        }

        if(node[0].type == '파트') {
          this.$emit("update", node[0].id);
        }
      }
    }
  }
</script>