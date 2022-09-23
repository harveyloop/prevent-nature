import actionLike from "./actionLike.js";
import getProducts from "./getProducts.js";
import menuMobile from "./menuMobile.js";

const d = document;

const $productsContainer = d.getElementById("productsContainer");
const $menuMobile = d.getElementById("menuMobile");
const $ham = d.getElementById("hamButton");

getProducts($productsContainer);
actionLike();
menuMobile($ham, $menuMobile);
