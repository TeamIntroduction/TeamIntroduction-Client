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
        <v-toolbar-title>User</v-toolbar-title>
      </v-toolbar>

      <v-list subheader>
        <v-list-item
          v-for="u in user"
          :key="u.id"
        >
          <v-list-item-content>
            <v-list-item-title v-text="u.name"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <router-link 
              :to="{
                name: 'UserInfo',
                params: {
                  id: u.ord,
                  serverDtoList: u.serverDtoList
                }
              }">
              <img :src=imgSrc width="40px" >
            </router-link>
          </v-list-item-icon>
          
        </v-list-item>
      </v-list>
    </v-card>
  </div>

</template>
<script>

  export default {
    data() {
      return {
        user : [],
        imgSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAABmZmbDw8OSkpLr6+vh4eFYWFjU1NTw8PC1tbU0NDTIyMgsLCzo6OiwsLD39/eAgICjo6MLCwupqalfX1+amppwcHBISEhOTk5ra2sbGxvX19fr8xukAAAC0ElEQVR4nO3c627aQBCGYZcYQlrbnCE93P91Np8i1C1jh8gZ2PHyPr9XYl7JJ8B2VVnrZvNtijbNuqfG6ra73KOOttt21/v2be4xv6TdX2nsZrlH/LLZh4mr6Qe+Ja6GA5tpb6FnbTMUOD/kns3JYT5QWOeezE09sBPmnstR765YwGH0n94D6jL3VK6WNnBdzl4otb2A68o4U5y1djNd5J7J2eIBC4+5R3J2NIWlXM+cHUyhPRue6uk4melnnygcvH4NqBlV+JRh0rGeKKwojI5CoTA2CoXC2CgUCmOjUCiMjUKhMDYKhcLYKBQKY6NQKIyNQqEwNgqFwtgoFApjo1AojM27cH7J3MxpVvi4V+HL6/P/fpqlv55v4fXlXoVm6ffLJTe6HTdQ4Y+bBFKYolAoTFDohcIEhUJhgkIvFCYoFAoT5ReaB4t/3yTwboXV4pL5ZLPCx+BE/BIlFMZGoVAYG4VCYWwUCoWxUSgUxkahUBgbhUJhbBQKhbF5Fy4vmRvO/pglLu5VWP6v+o/4zwyFXihMUCgUJij0QmGCQqEwQaEXChMUygN/Pyz/O35AFAqFsVEoFMZGoVAYG4VCYWwUCoWxUSgUxkahUBgbhUJhqvjngMv/Vf8R/5mh0AuFCQqFwgSFXihMUCgUJij0QmGCQnnkd0EX/z7v8t/JHhCFQmFsFAqFsVEoFMZGoVAYG4VCYWwUCoWxUSgUxkahUBgbhUJhbBQKhbFRKBTGRqFQGBuFQmFs4wqbDJOO1YwqPNXTcfpE4cGsmbaDKTzmHsnZ0RQuco/kzD6rWH5hd6ObXjNpO1O4rnMP5ao2t7xW1TL3UK76XiLZ2TPidM3sRvpmlXssR+bR63fl7Il1f2A1L+W65jB4y3tTxhmj/eA7w6qEo81sYCd8V8ABtf8wmiTup72ltvsrgWrc7nKPOdpue71P1s0m96ijbJqeS7XqLylPecnyvsGqAAAAAElFTkSuQmCC",
      }
    },
    created() {
      // let URL = 'https://211.197.235.121/hkl-dsgn/hcg/staging-flow/get-list-with-server';
      // this.$axios
      //   .get(URL)
      //   .then(res => {

      //     let target = res.data.data;

      //     console.log(target);
      //     Object.keys(target).forEach(e => {
      //       this.user.push({
      //         "id": target[e].id,
      //         "name": target[e].name,
      //         "ord": target[e].ord,
      //         "serverDtoList": target[e].serverDtoList
      //       })
      //     });
          
      //   })
      //   .catch(err => console.log(err))
    }
  }
</script>