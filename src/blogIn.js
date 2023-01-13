import blogSelect from "./blogSelect.js";
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
// blogSelect
const $fatherBlog = d.getElementById("fatherBlog");
const $titleBlog = d.getElementById("titleBlog");
const $textBlog = d.getElementById("textBlog");
const $dateBlog = d.getElementById("dateBlog");
const $imageBlog = d.getElementById("imageBlog");

menuMobile($ham, $menuMobile);
wishList(
  $buttonOpenModalWish,
  $closeOpenModalWish,
  $modalProductWish,
  $fatherModalWish,
  $erroWishList
);
linkBlog();
blogSelect($fatherBlog, $textBlog, $titleBlog, $dateBlog, $imageBlog);
