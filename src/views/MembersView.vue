<template>
  <v-app id="inspire">
    <v-navigation-drawer
      permanent
      app
    >
      <PartList @update="changePart"></PartList>  
    </v-navigation-drawer>

    <div id="member">
      <v-main>
        <MemberList 
          :send="partId" 
          @update="changeMember"
        ></MemberList>
      </v-main>

      <v-navigation-drawer
        v-model="drawer"
        hide-overlay
        app
        right
        temporary
        stateless
        less
        width="360"
      >
        <Member 
          :send="memberId"
          @update="clickExitBtn"
        ></Member>  
      </v-navigation-drawer>
    </div>
  </v-app>
</template>
  
<script>
  import PartList from '../components/PartList'
  import MemberList from '../components/MemberList'
  import Member from '../components/Member'

  export default {
    data: () => ({
      partId: 0,
      memberId: 0,
      drawer: false
    }),
    components: {
      PartList,
      MemberList,
      Member
    },
    methods: {
      changePart(node) {
        this.partId = node;
      },
      changeMember(memberId) {
        this.drawer = (this.memberId == memberId) ?  !this.drawer : true; 
        this.memberId = memberId;
      },
      clickExitBtn() {
        this.drawer = false;
      }
    }
  }
</script>

<style>
  v-app {
    min-width: 1000px;

  }

  .v-application .py-8 {
    height: 100%;
    padding: 30px 30px !important;
  }

  .row {
      height: 100%;
      margin: 0px;
  }

  #member {
    height: 100%;
  }

  v-navigation-drawer{
    width: 500px;
  }

</style>