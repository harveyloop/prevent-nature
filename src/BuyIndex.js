import countProduct from "./countProduct.js";
import localStorageGet from "./localStorageGet.js";
import menuMobile from "./menuMobile.js";
import toBuy from "./toBuy.js";
import toBuyLoad from "./toBuyLoad.js";
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
// countProduct
const $incrementProduct = d.getElementById("incrementProduct");
const $decrementProduct = d.getElementById("decrementProduct");
const $countProductModal = d.getElementById("countProductModal");

// toBuyLoad
const $titleProduct = d.getElementById("titleProductBuy");
const $descriptionProduct = d.getElementById("descriptionProductBuy");
const $payPal = d.getElementById("paypalButtonBuy");
const $priceProduct = d.getElementById("priceProductBuy");
const $whatsAppButton = d.getElementById("whatsAppButtonBuy");
const $imgBuyShow = d.getElementById("imgBuyShow");

menuMobile($ham, $menuMobile);

wishList(
  $buttonOpenModalWish,
  $closeOpenModalWish,
  $modalProductWish,
  $fatherModalWish,
  $erroWishList
);
countProduct($incrementProduct, $decrementProduct, $countProductModal);
localStorageGet();
toBuy();
toBuyLoad(
  $titleProduct,
  $descriptionProduct,
  $payPal,
  $priceProduct,
  $whatsAppButton,
  $imgBuyShow
);
