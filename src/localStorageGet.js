function localStorageGet() {
  document.addEventListener("DOMContentLoaded", (e) => {
    createLikeProduct();
  });
  function createLikeProduct() {
    if (localStorage.getItem("likeProduct")) {
      return;
    } else {
      localStorage.setItem("likeProduct", "[]");
    }
  }
}
export default localStorageGet;
