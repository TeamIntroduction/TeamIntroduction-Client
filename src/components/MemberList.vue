<template>
    <v-container
        class="py-8 px-6"
        fluid
    >
        <v-row>
            <v-list two-line>
                <v-list-item
                    v-for="m in members"
                    :key="m.id"
                    @click="selected(m.id)"  
                >
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{m.name}}</v-list-item-title>

                        <v-list-item-subtitle>
                            {{m.position}}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    <div class="link">
                        >
                    </div>
                </v-list-item>
            </v-list>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    props: ['send'],
    name: 'MemberList',
    data: () => ({
        partId : 0,
        members : [],
        //memberId : 0
    }),

    methods: {
        selected(memberId) {
            //this.memberId = memberId;
            this.$emit("update", memberId);
        }
    },

    watch : {
        send : function(){
            this.partId=this.$props.send;
            let URL = `http://127.0.0.1:8080/members?partId=${this.partId}`;
            this.$axios.get(URL)
                .then(res => {
                    let target = res.data.data;

                    this.members = [];
                    Object.keys(target).forEach(i => {
                        this.members.push({
                            "id": target[i].id,
                            "name": target[i].name,
                            "photo": target[i].photo,
                            "position": target[i].position
                        })
                    });
                })
                .catch(err => console.log(err))
        },
    }
  }
</script>
<style>
    .container {
        height: 100%;
    }

    .v-list {
        width: 100%;
    }

    .link {
        font-size: 30px;
        color: #BE9A7A;
    }

    .v-main {
        height: 100%;
    }
</style>