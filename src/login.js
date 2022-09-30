import actionLike from "./actionLike.js";
import infoModalProduct from "./infoModalProduct.js";
import logicForm from "./logicForm.js";
import menuMobile from "./menuMobile.js";
import validateForm from "./validateForm.js";
import wishList from "./wishList.js";

const d = document;

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
// wishList
const $buttonOpenModalWish = d.getElementById("buttonOpenModalWish");
const $closeOpenModalWish = d.getElementById("closeOpenModalWish");
const $modalProductWish = d.getElementById("modalProductWish");
const $fatherModalWish = d.getElementById("modalWishContent");
const $erroWishList = d.getElementById("erroWishList");

//logicForm
const $passwordForm = d.getElementById("password");
// validateForm
const $emailforuser = d.getElementById("emailforuser");
const $viewErrorEmail = d.getElementById("viewErrorEmail");
const $password = d.getElementById("password");
const $viewErrorPassword = d.getElementById("viewErrorPassword");

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
wishList(
  $buttonOpenModalWish,
  $closeOpenModalWish,
  $modalProductWish,
  $fatherModalWish,
  $erroWishList
);
logicForm($passwordForm);
validateForm($emailforuser, $viewErrorEmail, $password, $viewErrorPassword);
