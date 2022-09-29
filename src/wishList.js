const wishList = (open, close, modal, fatherCopy, errorJus) => {
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

      if (allDataConvertTwo.length === 0) {
        elementZero();
      } else {
        allDataConvertTwo.forEach((item) => {
          let idTrue = parseInt(item.id);
          getProductForId(idTrue);
        });
      }
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
    if (allData.length === 0) {
      elementZero();
    } else {
      allData.forEach((item) => {
        let idTrue = parseInt(item.id);
        getProductForId(idTrue);
      });
    }
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
    } catch (err) {
      console.log(errorJus);
      errorJus.className = "error-wish-list active-error-wish-list";
      setTimeout(() => (errorJus.className = "error-wish-list"), 5000);
    }
  }
  function elementZero() {
    const $fragment = document.createDocumentFragment();

    let divContentNone = document.createElement("div");
    let theSvg = document.createElement("div");
    let title = document.createElement("h5");
    let message = document.createElement("p");
    divContentNone.className = "contentForListNone";
    theSvg.innerHTML = `
    <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.4004 13.301C19.3008 17.9451 15.1728 22.043 14.4003 22.8011C13.6277 23.5591 13.1644 23.5964 12.4003 22.8011L2.90028 12.801C2.90028 12.801 -0.599723 8.30098 1.90028 4.30108C4.40028 0.301177 7.40016 1.30118 9.40028 1.80108C11.4004 2.30098 13.9003 4.30108 13.9003 4.30108C16.9163 0.524387 19.3006 0.445309 22.4003 1.80108C25.5 3.15685 27.5 8.65686 23.4004 13.301Z" fill="white" stroke="#84BD86" stroke-width="2"/>
    </svg>
    `;

    title.textContent = "Tu Lista de Deseos esta vacía. ";
    message.textContent =
      "Aún no tienes ningún producto en la lista de deseos. Encontrará muchos productos interesantes en nuestra página Tienda";
    divContentNone.appendChild(theSvg);
    divContentNone.appendChild(title);
    divContentNone.appendChild(message);
    $fragment.appendChild(divContentNone);
    fatherCopy.appendChild($fragment);
  }
};
export default wishList;
