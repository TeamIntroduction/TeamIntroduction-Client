import Vue from "vue"
import VueRouter from "vue-router";
import UserList from "@/views/UserList"
import UserInfo from "@/views/UserInfo"
import SignIn from "@/views/SignInView"
import Members from "@/views/MembersView"

Vue.use(VueRouter)

const routes = [
    { path : "/", name : "SignIn", component : SignIn },
    { path : "/members", name : "Members", component : Members },
    { path : "/user-list", name : "UserList", component : UserList },
    { path : "/user-info", name : "UserInfo", component : UserInfo, props: true },
]

const router = new VueRouter({
    mode: "history",
    routes : routes
});

export default router;