import actionLike from "./actionLike.js";
import countProduct from "./countProduct.js";
import getProducts from "./getProducts.js";
import infoModalProduct from "./infoModalProduct.js";
import loadBlogIndex from "./loadBlogIndex.js";
import localStorageGet from "./localStorageGet.js";
import menuMobile from "./menuMobile.js";
import { scrollProduct } from "./scrollProduct.js";
import toBuy from "./toBuy.js";
import toBuyLoad from "./toBuyLoad.js";
import wishList from "./wishList.js";

const d = document;
// getProducts
const $productsContainer = d.getElementById("productsContainer");
// menuMobile
const $menuMobile = d.getElementById("menuMobile");
const $ham = d.getElementById("hamButton");
// infoModalProduct
const $nameModalProduct = d.getElementById("productModalName");
const $imageModalProduct = d.getElementById("productModalImage");
const $priceModalProduct = d.getElementById("productModalPrice");
const $descriptionModalProduct = d.getElementById("productModalDescription");
const $closeModalProduct = d.getElementById("closeModalProduct");
const $modalProductInfo = d.getElementById("modalInfoProduct");
const $buttonAddCar = d.getElementById("buttonAddCar");
const $buttonSaveId = d.getElementById("buttonSaveId");
// wishList
const $buttonOpenModalWish = d.getElementById("buttonOpenModalWish");
const $closeOpenModalWish = d.getElementById("closeOpenModalWish");
const $modalProductWish = d.getElementById("modalProductWish");
const $fatherModalWish = d.getElementById("modalWishContent");
const $erroWishList = d.getElementById("erroWishList");
// countProduct
const $incrementProduct = d.getElementById("incrementProduct");
const $decrementProduct = d.getElementById("decrementProduct");
const $countProductModal = d.getElementById("countProductModal");
// scrollProduct
const $inputSearchProduct = d.getElementById("searchProduct");
// loadBlogIndex
const $blogIndex = d.getElementById("blogIndex");

getProducts($productsContainer);
actionLike();
menuMobile($ham, $menuMobile);
infoModalProduct(
  $modalProductInfo,
  $nameModalProduct,
  $priceModalProduct,
  $imageModalProduct,
  $descriptionModalProduct,
  $closeModalProduct,
  $buttonAddCar,
  $buttonSaveId
);
wishList(
  $buttonOpenModalWish,
  $closeOpenModalWish,
  $modalProductWish,
  $fatherModalWish,
  $erroWishList
);
scrollProduct();
countProduct($incrementProduct, $decrementProduct, $countProductModal);
localStorageGet();
toBuy();
toBuyLoad();
loadBlogIndex($blogIndex);
