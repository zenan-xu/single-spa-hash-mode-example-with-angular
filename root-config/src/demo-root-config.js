import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import layout from "./layout.html";

const routes = constructRoutes(layout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();


// registerApplication({
//   name: "@demo/navbar",
//   app: () => System.import("@demo/navbar"),
//   activeWhen: (location) => true,
// });
//
// registerApplication({
//   name: "@demo/app1",
//   app: () => System.import("@demo/app1"),
//   activeWhen: (location) => location.hash.startsWith("#/app1"),
// });
//
// registerApplication({
//   name: "@demo/app2",
//   app: () => System.import("@demo/app2"),
//   activeWhen: (location) => location.hash.startsWith("#/app2"),
// });
//
// start({
//   urlRerouteOnly: true,
// });