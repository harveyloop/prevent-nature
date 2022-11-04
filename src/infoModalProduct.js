const infoModalProduct = (
  modal,
  name,
  price,
  image,
  description,
  btnclose,
  buttonAddCar,
  buttonSaveId
) => {
  document.addEventListener("click", (e) => {
    if (
      (e.target.className === "action-item-info-modal" &&
        e.target.tagName === "SPAN") ||
      (e.target.tagName === "IMG" && e.target.className === "action47adcbu45")
    ) {
      let idForSearch = parseInt(e.target.getAttribute("productIdInfo"));
      getProductForId(idForSearch);
      modal.classList.toggle("modal-deactivate-info");
      document.querySelector("html").classList.toggle("noScroll");
    }
  });
  async function getProductForId(id) {
    let url = "../data/data.json";
    try {
      let res = await fetch(url);
      let json = await res.json();
      let theProductSelect = json.filter((item) => item.id === id);
      name.textContent = theProductSelect[0].name;
      price.textContent = `S/.${theProductSelect[0].price}`;
      image.style.setProperty(
        "background-image",
        `url(${theProductSelect[0].img})`
      );
      description.textContent = theProductSelect[0].description;
      buttonAddCar.setAttribute("idAddCart", `${theProductSelect[0].id}`);
      buttonSaveId.setAttribute("idAddCart", `${theProductSelect[0].id}`);
    } catch (error) {
      // no forget the error
    }
  }
  btnclose.addEventListener("click", (e) => {
    modal.classList.toggle("modal-deactivate-info");
    document.querySelector("html").classList.toggle("noScroll");
  });
};
export default infoModalProduct;
