import actionLike from "./actionLike.js";
import getProducts from "./getProducts.js";
import menuMobile from "./menuMobile.js";
import AOS from "aos";
import "aos/dist/aos.css";

const d = document;

const $productsContainer = d.getElementById("productsContainer");
const $menuMobile = d.getElementById("menuMobile");
const $ham = d.getElementById("hamButton");

getProducts($productsContainer);
actionLike();
menuMobile($ham, $menuMobile);
AOS.init();
