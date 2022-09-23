const menuMobile = (ham, menu) => {
  document.addEventListener("click", toggle);
  function toggle() {
    ham.classList.toggle("is-active");
    menu.classList.toggle("mobile-active");
  }
};
export default menuMobile;
