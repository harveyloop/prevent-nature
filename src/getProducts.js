const getProducts = async (father) => {
  let fragmentTemp = document.createDocumentFragment();

  let url = "../data/data.json";
  try {
    let res = await fetch(url);
    let json = await res.json();
    json.forEach((item) => {
      let convertNumber = parseFloat(item.price).toFixed(2);
      let divTemp = document.createElement("div");
      divTemp.className = "products-info-container__second-box";
      //
      let bgResponsiveImageItem = document.createElement("div");
      let bgResponsiveImageItemActionUser = document.createElement("div");
      let actionItemLove = document.createElement("span");
      let actionItemInfoModal = document.createElement("span");
      let imgActionItemInfoModal = document.createElement("img");
      let hovDetailBgResponsiveImageItem = document.createElement("div");
      let aHovDetailBgResponsiveImageItem = document.createElement("a");
      let productPrincipalImage = document.createElement("img");

      let responsiveInfoItem = document.createElement("div");
      let nameProduct = document.createElement("h4");
      let elementP = document.createElement("p");
      let responsiveInfoItemButton = document.createElement("a");
      let responsiveInfoItemButtonText = document.createElement("span");
      let separatorresponsiveInfoItem = document.createElement("hr");
      let responsiveInfoItemButtonImage = document.createElement("span");
      let imgResponsiveInfoItemButtonImage = document.createElement("img");

      bgResponsiveImageItem.className = "bg-responsive-image-item";
      bgResponsiveImageItemActionUser.className =
        "bg-responsive-image-item__action-user";
      actionItemLove.className = "action-item-love";
      actionItemInfoModal.className = "action-item-info-modal";
      imgActionItemInfoModal.className = "action47adcbu45";
      hovDetailBgResponsiveImageItem.className =
        "hov-detail-bg-responsive-image-item";
      productPrincipalImage.className = "product-principal-image";
      responsiveInfoItem.className = "reponsive-info-item";
      nameProduct.className = "name-product";
      responsiveInfoItemButton.className = "responsive-info-item-button";
      responsiveInfoItemButtonText.className =
        "responsive-info-item-button__text";
      responsiveInfoItemButtonImage.className =
        "responsive-info-item-button__image";

      actionItemLove.setAttribute("productId", `${item.id}`);
      responsiveInfoItemButton.setAttribute("href", `${item.messageWhats}`);
      actionItemInfoModal.setAttribute("productIdInfo", `${item.id}`);
      imgActionItemInfoModal.setAttribute("productIdInfo", `${item.id}`);
      imgActionItemInfoModal.setAttribute("src", `../assets/info-item.svg`);
      imgActionItemInfoModal.setAttribute("alt", `información`);
      productPrincipalImage.setAttribute("src", `${item.img}`);
      productPrincipalImage.setAttribute("alt", `producto`);
      imgResponsiveInfoItemButtonImage.setAttribute(
        "src",
        `../assets/whatsapp.svg`
      );

      aHovDetailBgResponsiveImageItem.textContent = "VER DETALLE";
      nameProduct.textContent = `${item.name}`;
      elementP.textContent = `S/ ${convertNumber}`;
      responsiveInfoItemButtonText.textContent = "CONSULTAR POR WHATSAPP";

      bgResponsiveImageItem.appendChild(bgResponsiveImageItemActionUser);
      bgResponsiveImageItem.appendChild(hovDetailBgResponsiveImageItem);
      bgResponsiveImageItem.appendChild(productPrincipalImage);
      bgResponsiveImageItemActionUser.appendChild(actionItemLove);
      actionItemLove.innerHTML = `
        <svg
        class="item-love-svg"
        width="27"
        height="25"
        viewBox="0 0 27 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="item-love-path"
          d="M23.4004 13.301C19.3008 17.9451 15.1728 22.043 14.4003 22.8011C13.6277 23.5591 13.1644 23.5964 12.4003 22.8011L2.90028 12.801C2.90028 12.801 -0.599723 8.30098 1.90028 4.30108C4.40028 0.301177 7.40016 1.30118 9.40028 1.80108C11.4004 2.30098 13.9003 4.30108 13.9003 4.30108C16.9163 0.524387 19.3006 0.445309 22.4003 1.80108C25.5 3.15685 27.5 8.65686 23.4004 13.301Z"
          fill="white"
          stroke="#84BD86"
          stroke-width="3"
        />
      </svg>
      `;
      bgResponsiveImageItemActionUser.appendChild(actionItemInfoModal);
      actionItemInfoModal.appendChild(imgActionItemInfoModal);
      hovDetailBgResponsiveImageItem.appendChild(
        aHovDetailBgResponsiveImageItem
      );
      responsiveInfoItem.appendChild(nameProduct);
      responsiveInfoItem.appendChild(elementP);
      responsiveInfoItem.appendChild(responsiveInfoItemButton);
      responsiveInfoItemButton.appendChild(responsiveInfoItemButtonText);
      responsiveInfoItemButton.appendChild(separatorresponsiveInfoItem);
      responsiveInfoItemButton.appendChild(responsiveInfoItemButtonImage);
      responsiveInfoItemButtonImage.appendChild(
        imgResponsiveInfoItemButtonImage
      );
      divTemp.appendChild(bgResponsiveImageItem);
      divTemp.appendChild(responsiveInfoItem);

      fragmentTemp.appendChild(divTemp);
      father.appendChild(fragmentTemp);
    });
    let fatherForMoreProducts = father.parentNode;
    let elementMoreProducts = document.createElement("div");
    let elementMoreProductsChild = document.createElement("a");
    elementMoreProductsChild.textContent = "Ver mas productos";
    elementMoreProducts.className =
      "products-info-container__third grid-center";
    elementMoreProducts.appendChild(elementMoreProductsChild);
    fatherForMoreProducts.appendChild(elementMoreProducts);
  } catch (err) {
    console.log(err);
    let myElementErr = document.createElement("h4");
    let mySecondElementErr = document.createElement("h3");
    let myThirdElementErr = document.createElement("div");
    myThirdElementErr.className = "err-product-load";
    mySecondElementErr.textContent = ":(";
    myElementErr.textContent = "Lo sentimos sucedio un error";
    myThirdElementErr.appendChild(mySecondElementErr);
    myThirdElementErr.appendChild(myElementErr);
    fragmentTemp.appendChild(myThirdElementErr);
    father.parentNode.appendChild(fragmentTemp);
  }
};
export default getProducts;
