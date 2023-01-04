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
            
            let URL = 'http://127.0.0.1:8080/key/asymmetric-key';
            let res = await this.$axios.post(URL)
            let target = res.data.data;

            localStorage.setItem("SK", this.$generateRandomString(32));
            
            const encrypt = new JSEncrypt();
            encrypt.setPublicKey(target["PK"]);
            const encrypted = encrypt.encrypt(localStorage.getItem("SK"));
            
            URL = 'http://127.0.0.1:8080/key/symmetric-key';
            res = await this.$axios.post(URL, {
                symmetricKey: encrypted
            });       
        },
        methods: {
            submit() {
                let URL = "http://127.0.0.1:8080/login";

                const encryptedPassword = this.$encryptAES(this.password)

                this.$axios.post(URL, {
                        username: this.username,
                        password: encryptedPassword
                    })
                    .then(() => {
                        this.$router.push('/members')
                    })
                    .catch(err => {
                        this.errorMsg = err.response.data.message;
                        this.dialog = true;
                    })
            },     
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