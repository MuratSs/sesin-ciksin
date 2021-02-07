import Vue from "vue";
import VueRouter from "vue-router";

import Index from "./components/HelloWorld";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Index }
];

export const router = new VueRouter({
  mode: "history",
  routes
});