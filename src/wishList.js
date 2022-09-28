const wishList = (open, close, modal, fatherCopy) => {
  document.addEventListener("click", (e) => {
    e.preventDefault();
    let tempVarFat = fatherCopy.parentNode;
    if (e.target === open) {
      openModalAndGetData();
    } else if (e.target === close) {
      toggleModal();
    }

    if (e.target === tempVarFat.parentNode) {
      modal.classList.toggle("wish-active-modal-js");
      document.querySelector("html").classList.toggle("noScroll");
    }

    if (e.target.className === "clickActionListener03") {
      console.log(e.target.getAttribute("product-just-id"));
      let allData = JSON.parse(localStorage.getItem("likeProduct")) || [];
      let idTrue = e.target.getAttribute("product-just-id");
      let allDataConvert = allData.filter((item) => item.id !== idTrue);
      localStorage.setItem("likeProduct", JSON.stringify(allDataConvert));
      let allDataConvertTwo =
        JSON.parse(localStorage.getItem("likeProduct")) || [];
      fatherCopy.innerHTML = ` `;
      allDataConvertTwo.forEach((item) => {
        let idTrue = parseInt(item.id);
        getProductForId(idTrue);
      });
    }
  });

  const $fragment = document.createDocumentFragment();
  function toggleModal(e) {
    modal.classList.toggle("wish-active-modal-js");
    document.querySelector("html").classList.toggle("noScroll");
  }
  function openModalAndGetData(e) {
    toggleModal(e);
    fatherCopy.innerHTML = ` `;
    let allData = JSON.parse(localStorage.getItem("likeProduct")) || [];
    allData.forEach((item) => {
      let idTrue = parseInt(item.id);
      getProductForId(idTrue);
    });
  }
  async function getProductForId(id) {
    let url = "../data/data.json";
    try {
      let res = await fetch(url);
      let json = await res.json();
      let theProductSelect = json.filter((item) => item.id === id);
      console.log(theProductSelect);
      let myProductWish = document.createElement("div");
      myProductWish.className = "modal-info-wish-item";
      myProductWish.innerHTML = `
            <img
                src=${theProductSelect[0].img}
                alt="product"
                class="modal-info-wish-main-image"
            />
            <h5>
            ${theProductSelect[0].name}
            <br />
            <span>S/${theProductSelect[0].price}</span>
            </h5>
            <div class="modal-info-wish-close-button-product">
            <img
                src="../assets/close-modal.svg"
                alt="cerrar modal"
                srcset=""
                product-just-id="${theProductSelect[0].id}"
                class="clickActionListener03"
            />
            </div>
        `;
      $fragment.appendChild(myProductWish);
      fatherCopy.appendChild($fragment);
    } catch (error) {
      console.log("Error");
    }
  }
};
export default wishList;
