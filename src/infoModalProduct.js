const infoModalProduct = (modal, name, price, image, description, btnclose) => {
  document.addEventListener("click", (e) => {
    if (
      e.target.className == "action-item-info-modal" &&
      e.target.tagName == "SPAN"
    ) {
      let idForSearch = parseInt(e.target.getAttribute("productIdInfo"));
      getProductForId(idForSearch);
      modal.classList.toggle("modal-deactivate-info");
    }
  });
  async function getProductForId(id) {
    let url = "../data/data.json";
    try {
      let res = await fetch(url);
      let json = await res.json();
      let theProductSelect = json.filter((item) => item.id === id);
      console.log(theProductSelect[0].name);
      console.log(theProductSelect.name);
      name.textContent = theProductSelect[0].name;
      price.textContent = `S/.${theProductSelect[0].price}`;
      image.setAttribute("src", theProductSelect[0].img);
      description.textContent = theProductSelect[0].description;
    } catch (error) {}
  }
  btnclose.addEventListener("click", (e) => {
    modal.classList.toggle("modal-deactivate-info");
  });
};
export default infoModalProduct;
