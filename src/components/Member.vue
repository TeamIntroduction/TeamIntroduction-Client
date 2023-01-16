<template>
    <div class="container">
        <div class="row">
            <div class="col-md-7"> 
                <div class="card border-0 shadow">
                    <button id="exitBtn" @click="clickExitBtn"><img src="https://cdn-icons-png.flaticon.com/512/61/61208.png"></button>
                    <img id="avater" src="@/assets/images/avater.jpg" alt="...">
                        <div class="card-body p-1-9 p-xl-5">
                            <div class="mb-4">
                                <h3 class="h4 mb-0">{{ this.member.name }}</h3>
                                <span class="text-primary">{{ this.member.part}} | {{ this.member.position }}</span>
                            </div>
                            <ul class="list-unstyled mb-4">
                                <li class="mb-3"><i class="far fa-envelope display-25 me-3 text-secondary"></i>{{ member.email }}</li>
                                <li class="mb-3"><i class="fas fa-mobile-alt display-25 me-3 text-secondary"></i> {{ member.phoneNumber }} </li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['send'],
    name: 'MemberInfo',
    data: () => ({
        memberId : 0,
        member : {},
    }),
    methods: {
        clickExitBtn() {
            this.$emit("update");
        }
    },
    watch : {
        send : function(){
            this.memberId=this.$props.send;
            
            const encryptedMemberId = this.$encryptAES(this.memberId.toString())

            this.$axios.get(`/members/${encodeURIComponent(encryptedMemberId)}`)
                .then(res => {
                    
                    let target = res.data.data;
                    target = JSON.parse(this.$decryptAES(target))
                    this.member = {
                        "id": target.id,
                        "name": target.name,
                        "part": target.partName,
                        "position": target.position,
                        "phoneNumber": target.phoneNumber,
                        "email": target.email,
                    }
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

    img {
        width: 100%;
        height: 100%;
    }

    #avater {
        width: 180%;
        height: 180%;
    }

    .row .col {
        width: 100%;
    }

    .v-list {
        width: 100%;
    }

    #exitBtn {
        width: 30px;
        height: 30px;
    }

    .link {
        font-size: 30px;
        color: #BE9A7A;
    }

    .text-secondary, .text-secondary-hover:hover {
        color: #59b73f !important;
    }
    .display-25 {
        font-size: 1.4rem;
    }

    .text-primary, .text-primary-hover:hover {
        color: #ff712a !important;
    }

    p {
        margin: 0 0 20px;
    }

    .mb-1-6, .my-1-6 {
        margin-bottom: 1.6rem;
    }

    .col-md-7 {
        width: 100%;
    }

</style>