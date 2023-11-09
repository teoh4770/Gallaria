import Router from "./services/Router.js";
import loadImages from "./services/Images.js";

let images;

window.addEventListener("DOMContentLoaded", async (event) => {
  Router.init();
  images = await loadImages();
});
