import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import ContactUs from "../components/ContactUs";
//import MyApp from "../components/MyApp";


Vue.use(VueRouter)


const routes = [
    {
        path : "", component : Home
    },
    {
        path : "/contact", component : ContactUs
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router