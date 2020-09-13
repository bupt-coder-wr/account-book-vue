import Vue from "vue";
import VueRouter from "vue-router";

const Record = () => import("@/views/Record");
const Asset = () => import("@/views/Asset");
const Discover = () => import("@/views/Discover");
const Home = () => import("@/views/Home");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/record",
    name: "Record",
    component: Record
  },
  {
    path: "/asset",
    name: "Asset",
    component: Asset
  },
  {
    path: "/discover",
    name: "Discover",
    component: Discover
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
