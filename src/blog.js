import blogData from "./getBlog.js";
import linkBlog from "./linkBlog.js";
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
//getBlog.js
const $loadBlog = d.getElementById("loadBlog");
const $imageBlog = d.getElementById("imageBlog");
const $timeBlog = d.getElementById("timeBlog");
const $titleBlog = d.getElementById("titleBlog");
const $descriptionBlog = d.getElementById("descriptionBlog");
const $linkPrincipal = d.getElementById("linkPrincipal");
menuMobile($ham, $menuMobile);
wishList(
  $buttonOpenModalWish,
  $closeOpenModalWish,
  $modalProductWish,
  $fatherModalWish,
  $erroWishList
);
blogData(
  $loadBlog,
  $timeBlog,
  $titleBlog,
  $imageBlog,
  $descriptionBlog,
  $linkPrincipal
);
linkBlog();
