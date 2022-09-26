import actionLike from "./actionLike.js";
import getProducts from "./getProducts.js";
import infoModalProduct from "./infoModalProduct.js";
import menuMobile from "./menuMobile.js";

const d = document;
const $productsContainer = d.getElementById("productsContainer");
const $menuMobile = d.getElementById("menuMobile");
const $ham = d.getElementById("hamButton");
const $nameModalProduct = d.getElementById("productModalName");
const $imageModalProduct = d.getElementById("productModalImage");
const $priceModalProduct = d.getElementById("productModalPrice");
const $descriptionModalProduct = d.getElementById("productModalDescription");
const $closeModalProduct = d.getElementById("closeModalProduct");
const $modalProductInfo = d.getElementById("modalInfoProduct");

getProducts($productsContainer);
actionLike();
menuMobile($ham, $menuMobile);
infoModalProduct(
  $modalProductInfo,
  $nameModalProduct,
  $priceModalProduct,
  $imageModalProduct,
  $descriptionModalProduct,
  $closeModalProduct
);
