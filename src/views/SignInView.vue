<template fill-height>
    <v-container fill-height>
        <v-card>
            <v-card-title class="justify-center">
                <p class="text-h4 text--primary title" >
                    Login
                </p>
            </v-card-title>
            <form v-on:submit.prevent>
                <v-text-field
                    label="ID"
                    v-model="username"
                    prepend-inner-icon="mdi-account"
                ></v-text-field>
                <v-text-field
                    prepend-inner-icon="mdi-lock"
                    type="password"
                    v-model="password"
                    label="Password"
                ></v-text-field>
                <v-btn
                    type="submit"
                    color="blue lighten-1 text-capitalize"
                    depressed
                    large
                    block
                    dark
                    class="mb-3"
                    @click="submit()"
                > 
                    Login
                </v-btn>
            </form>
        </v-card>

        <v-dialog
            v-model="dialog"
        >
            <ErrorAlert :errMsg="errorMsg"></ErrorAlert>
        </v-dialog>
    </v-container>
            
</template>

<script>
    import ErrorAlert from '../components/ErrorAlert'
    import JSEncrypt  from "jsencrypt";
    
    export default {
        data() {
        return {
            user : [],
            username: '',
            password: '',
            errorMsg: '',
            dialog: false,
        }
        },
        components: {
            ErrorAlert
        },
        async created() {
            
            let URL = 'http://127.0.0.1:8080/asymmetric-key';
            let res = await this.$axios.post(URL)
            console.log(res)
            let target = res.data.data;
            localStorage.setItem("SYMMETRIC_KEY", this.$generateRandomString(32));

            const encrypt = new JSEncrypt();
            encrypt.setPublicKey(target["PUBLIC_KEY"]);
            const encrypted = encrypt.encrypt(localStorage.getItem("SYMMETRIC_KEY"));
            //console.log(encrypted)
            console.log(localStorage.getItem("SYMMETRIC_KEY"))
            URL = 'http://127.0.0.1:8080/symmetric-key';
            res = await this.$axios.post(URL, {
                symmetricKey: encrypted
            });
            console.log(res);
            
            //console.log(cryptico.encrypt(localStorage.getItem("SYMMETRIC_KEY"), target["PUBLIC_KEY"]));
            //let encrypted = this.$rsa.encrypt('Top-Secret message')
            //console.log(encrypted)//console.log(this.$cryptico.publicKeyString(target["PUBLIC_KEY"]));

        },
        methods: {
            submit() {
                let URL = "http://127.0.0.1:8080/login";
                this.$axios.post(URL, {
                        username: this.username,
                        password: this.password,
                    })
                    .then(
                        this.$router.push('/members')
                    )
                    .catch(err => {
                        this.errorMsg = err.response.data.message;
                        this.dialog = true;
                    })
                }
        }
    }
</script>

<style>
    .v-application--wrap {
        background-color: steelblue;
    }

    .v-card {
        width: 30%;
        padding: 2%;
        margin:0 auto;
    }

  .v-alert {
    margin-bottom: 0px;
  }

  .v-dialog{
    position: absolute;
    top: 15%;
    width: 20%;
    
}
</style>