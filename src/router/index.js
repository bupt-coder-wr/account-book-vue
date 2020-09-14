import Vue from "vue";
import VueRouter from "vue-router";

const Record = () => import("@/views/record/Record");
const Report = () => import("@/views/record/Report");
const Asset = () => import("@/views/asset/Asset");
const Discover = () => import("@/views/discover/Discover");
const Home = () => import("@/views//home/Home");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/record"
  },
  {
    path: "/record",
    name: "Record",
    component: Record
  },
  {
    path: "/report",
    name: "Report",
    component: Report
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
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "activeRoute"
});

export default router;
