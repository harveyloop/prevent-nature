function toBuy() {
  document.addEventListener("click", (e) => {
    let classA = "modal-info-product-just__center_modal_first__link_a";

    if (e.target.className === classA) {
      let idGet = e.target.getAttribute("idaddcart");
      localStorage.setItem("toBuyDirection", `${idGet}`);
    }
  });
}
export default toBuy;
