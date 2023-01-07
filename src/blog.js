import { blogData } from "./getBlog.js";
import menuMobile from "./menuMobile.js";
import wishList from "./wishList.js";

const d = document;

// menuMobile
const $menuMobile = d.getElementById("menuMobile");
const $ham = d.getElementById("hamButton");
// wishList
const $buttonOpenModalWish = d.getElementById("buttonOpenModalWish");
const $closeOpenModalWish = d.getElementById("closeOpenModalWish");
const $modalProductWish = d.getElementById("modalProductWish");
const $fatherModalWish = d.getElementById("modalWishContent");
const $erroWishList = d.getElementById("erroWishList");

menuMobile($ham, $menuMobile);
wishList(
  $buttonOpenModalWish,
  $closeOpenModalWish,
  $modalProductWish,
  $fatherModalWish,
  $erroWishList
);
blogData();
